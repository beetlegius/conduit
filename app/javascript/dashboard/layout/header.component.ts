import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
const TEMPLATE = require('./header.component.html')

import { User } from '../shared/models'
import { UserService } from '../shared/services'

@Component({
  selector: 'layout-header',
  template: TEMPLATE
})
export class HeaderComponent implements OnInit {
  currentUser: User

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.currentUser.subscribe( (user) => this.currentUser = user )
  }

  logout() {
    this.userService.logout()
    this.router.navigate(['/login'])
  }
}
