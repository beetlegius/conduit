import { Component, OnInit } from '@angular/core'
const TEMPLATE = require('./articles-index.component.html')

import { ArticlesListComponent } from './articles-list.component'

import { User } from '../shared/models'
import { UsersService } from '../shared/services'

@Component({
  selector: 'home',
  template: TEMPLATE
})
export class ArticlesIndexComponent implements OnInit {

  user: User

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersService.currentUser.subscribe( (user) => this.user = user )
  }

}
