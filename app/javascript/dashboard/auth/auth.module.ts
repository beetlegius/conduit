import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { LoginComponent } from './login.component'
import { RegisterComponent } from './register.component'

import { SharedModule } from '../shared'

const authRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
])

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    authRouting
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: []
})
export class AuthModule {}
