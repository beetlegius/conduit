import { Component, OnInit } from '@angular/core'
const TEMPLATE = require('./app.component.html')

import { UserService } from '../shared/services'

@Component({
  selector: 'dashboard',
  template: TEMPLATE
})
export class AppComponent implements OnInit {

  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.init()
  }

}
