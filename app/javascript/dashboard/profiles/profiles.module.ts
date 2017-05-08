import { BrowserModule } from '@angular/platform-browser'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ProfileComponent }  from './profile.component'

import { ArticlesModule } from '../articles/articles.module'
import { SharedModule } from '../shared'

const profilesRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'profiles/:id', component: ProfileComponent }
])

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    ArticlesModule,
    profilesRouting
  ],
  declarations: [
    ProfileComponent
  ],
  providers: []
})
export class ProfilesModule {}
