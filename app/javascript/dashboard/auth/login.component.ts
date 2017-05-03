import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
const TEMPLATE = require('./login.component.html')

import { UserService } from '../shared/services'

@Component({
  selector: 'login',
  template: TEMPLATE
})
export class LoginComponent implements OnInit {

  authForm: FormGroup
  isSubmitting: boolean

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  submit() {
    this.isSubmitting = true

    let credentials = this.authForm.value
    this.userService.login(credentials).subscribe(
      data => this.router.navigate(['/']),
      err => this.isSubmitting = false
    )
  }

}
