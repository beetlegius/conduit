import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
const TEMPLATE = require('./header.component.html')

import { User } from '../models'
import { UsersService } from '../services'

@Component({
  selector: 'layout-header',
  template: TEMPLATE
})
export class HeaderComponent implements OnInit {
  public isCollapsed: boolean = true
  public currentUser: User

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usersService.currentUser.subscribe( (user) => this.currentUser = user )
  }

  logout() {
    this.usersService.logout()
    this.router.navigate(['/login'])
  }
}
