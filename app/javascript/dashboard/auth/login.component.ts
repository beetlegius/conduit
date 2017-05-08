import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
const TEMPLATE = require('./login.component.html')

import { UsersService } from '../shared/services'

@Component({
  selector: 'login',
  template: TEMPLATE
})
export class LoginComponent implements OnInit {

  authForm: FormGroup
  isSubmitting: boolean

  constructor(
    private usersService: UsersService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit() {
    this.isSubmitting = true

    let credentials = this.authForm.value
    this.usersService.login(credentials).subscribe(
      data => this.router.navigate(['/']),
      err => this.isSubmitting = false
    )
  }

}
