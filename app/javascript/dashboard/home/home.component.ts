import { Component, OnInit } from '@angular/core'
const TEMPLATE = require('./home.component.html')

import { User } from '../shared/models'
import { UserService } from '../shared/services'

@Component({
  selector: 'home',
  template: TEMPLATE
})
export class HomeComponent implements OnInit {

  user: User

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.currentUser.subscribe( (user) => this.user = user )
  }

}
