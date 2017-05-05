import { BrowserModule } from '@angular/platform-browser'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { CollapseModule } from 'ngx-bootstrap/collapse'

import { AppComponent } from './app.component'

import { AuthModule } from './auth/auth.module'
import { ArticlesModule } from './articles/articles.module'

import {
  SharedModule,
  HeaderComponent, FooterComponent
} from './shared'

const appRouting: ModuleWithProviders = RouterModule.forRoot([])

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting,
    AuthModule,
    ArticlesModule,
    SharedModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
