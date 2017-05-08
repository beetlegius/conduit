import { Component, OnInit } from '@angular/core'
const TEMPLATE = require('./app.component.html')

import { UsersService } from './shared'

@Component({
  selector: 'dashboard',
  template: TEMPLATE
})
export class AppComponent implements OnInit {

  constructor (
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersService.init()
  }

}
