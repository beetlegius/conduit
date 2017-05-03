import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { LoginComponent } from './login.component'
import { RegisterComponent } from './register.component'

import { UserService } from '../shared/services'

const authRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
])

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule,
    authRouting,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class AuthModule {}
