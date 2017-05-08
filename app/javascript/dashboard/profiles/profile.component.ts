import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
const TEMPLATE = require('./profile.component.html')

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
// import 'rxjs/add/operator/map'

import { User, UsersService } from '../shared'

@Component({
  selector: 'profile',
  template: TEMPLATE
})
export class ProfileComponent implements OnInit {

  private userSubject = new BehaviorSubject<User>(new User())

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe( (params) => this.usersService.find(params['id']).subscribe(
      (data) => this.userSubject.next(data.user),
      (err) => console.log(err)
    ))
  }

}
