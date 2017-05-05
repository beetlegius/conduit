import { BrowserModule } from '@angular/platform-browser'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { TruncatePipe } from 'angular2-truncate'
import { TabsModule } from 'ngx-bootstrap/tabs'

import { ArticlesIndexComponent } from './articles-index.component'
import { ArticlesNewComponent }   from './articles-new.component'
import { ArticlesEditComponent }  from './articles-edit.component'
import { ArticlesListComponent }  from './articles-list.component'

// import { UserService } from '../shared/services'

import { SharedModule } from '../shared'

const articlesRouting: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: ArticlesIndexComponent },
  { path: 'articles/new', component: ArticlesNewComponent },
  { path: 'articles/:id/edit', component: ArticlesEditComponent }
])

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    articlesRouting,
    TabsModule.forRoot()
  ],
  declarations: [
    ArticlesIndexComponent,
    ArticlesNewComponent,
    ArticlesEditComponent,
    ArticlesListComponent,
    TruncatePipe
  ],
  providers: [
    // UserService
  ]
})
export class ArticlesModule {}
