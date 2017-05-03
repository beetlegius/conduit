import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AuthModule } from '../auth/auth.module'

import { TruncatePipe } from 'angular2-truncate'

import { TabsModule } from 'ngx-bootstrap/tabs'

import { routes } from './app.routing'

import { AppComponent } from './app.component'
import { HeaderComponent } from '../layout/header.component'
import { FooterComponent } from '../layout/footer.component'
import { HomeComponent } from '../home/home.component'

import { ArticleListComponent } from '../articles/article-list.component'

import { ShowAuthedDirective } from '../shared/directives'
import { ApiService, JwtService, UserService, ArticlesService } from '../shared/services'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleListComponent,
    ShowAuthedDirective,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TabsModule.forRoot(),
    AuthModule
  ],
  providers: [
    ApiService,
    JwtService,
    UserService,
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
