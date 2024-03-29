import { Injectable } from '@angular/core'
import { Headers, Http, Response, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { environment } from '../environment'
import { JwtService } from './jwt.service'

@Injectable()
export class ApiService {
  constructor(
    private http: Http,
    private jwt: JwtService
  ) {}

  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    if (this.jwt.get()) {
      headersConfig['Authorization'] = `Token ${this.jwt.get()}`
    }
    return new Headers(headersConfig)
  }

  private formatErrors(error: any) {
     return Observable.throw(error.json())
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), search: params })
    .catch(this.formatErrors)
    .map( (res: Response) => res.json() )
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map( (res: Response) => res.json() )
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map( (res: Response) => res.json() )
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map( (res: Response) => res.json() )
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map( (res: Response) => res.json() )
  }
}
