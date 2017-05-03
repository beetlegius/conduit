import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  get(): string {
    return localStorage.getItem('jwtToken')
  }

  save(token: string) {
    localStorage.setItem('jwtToken', token)
  }

  destroy() {
    localStorage.removeItem('jwtToken')
  }

}
