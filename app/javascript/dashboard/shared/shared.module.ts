import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import {
  ApiService, ArticlesService, JwtService, UsersService,
  AutofocusDirective, ShowAuthedDirective
} from '.'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    AutofocusDirective,
    ShowAuthedDirective
  ],
  providers: [
    ApiService,
    ArticlesService,
    JwtService,
    UsersService
  ],
  exports: [
    AutofocusDirective,
    ShowAuthedDirective
  ]
})
export class SharedModule {}
