import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import 'rxjs/add/operator/map'

import { ApiService } from './api.service'
import { JwtService } from './jwt.service'
import { User } from '../models'

@Injectable()
export class UsersService {
  private currentUserSubject = new BehaviorSubject<User>(new User())
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged()

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1)
  public isAuthenticated = this.isAuthenticatedSubject.asObservable()

  private current_user_url: string = '/users/current'
  private users_url: string = '/users/'
  private authenticate_url: string = '/authenticate/'

  constructor (
    private http: Http,
    private jwt: JwtService,
    private api: ApiService
  ) {}

  init() : void {
    if (this.jwt.get()) {

      this.api.get(this.current_user_url).subscribe(
        data => this.load(data.user),
        err => this.logout()
      )

    } else {
      this.logout()
    }
  }

  load(user: User) : void {
    // Set current user data into observable
    this.currentUserSubject.next(user)
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true)
  }

  create(user) : Observable<any> {
    return this.api.post(this.users_url, { user: user }).map(
      (data) => {
        this.jwt.save(data.auth_token)
        this.load(data.user)
      }
    )
  }

  login(credentials) : Observable<any> {
    return this.api.post(this.authenticate_url, credentials).map(
      (data) => {
        this.jwt.save(data.auth_token)
        this.load(data.user)
      }
    )
  }

  logout() : void {
    this.jwt.destroy()
    this.currentUserSubject.next(new User())
    this.isAuthenticatedSubject.next(false)
  }

  find(slug: string) : Observable<any> {
    return this.api.get(this.users_url + slug)
  }

  // getCurrentUser(): User {
  //   return this.currentUserSubject.value
  // }

  // Update the user on the server (email, pass, etc)
  // update(user): Observable<User> {
  //   return this.apiService
  //   .put('/user', { user })
  //   .map(data => {
  //     // Update the currentUser observable
  //     this.currentUserSubject.next(data.user)
  //     return data.user
  //   })
  // }

}
