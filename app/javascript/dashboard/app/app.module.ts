import { BrowserModule } from '@angular/platform-browser'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AuthModule } from '../auth/auth.module'

import { TruncatePipe } from 'angular2-truncate'

import { TabsModule } from 'ngx-bootstrap/tabs'

import { AppComponent } from './app.component'
import { HeaderComponent } from '../layout/header.component'
import { FooterComponent } from '../layout/footer.component'
import { HomeComponent } from '../home/home.component'

import { ArticleListComponent } from '../articles/article-list.component'
import { ArticleFormNewComponent } from '../articles/article-form-new.component'
import { ArticleFormEditComponent } from '../articles/article-form-edit.component'

import { ShowAuthedDirective } from '../shared/directives'
import { ApiService, JwtService, UserService, ArticlesService } from '../shared/services'

const appRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'articles/new', component: ArticleFormNewComponent },
  { path: 'articles/:id/edit', component: ArticleFormEditComponent }
])

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleListComponent,
    ArticleFormNewComponent,
    ArticleFormEditComponent,
    ShowAuthedDirective,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting,
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
