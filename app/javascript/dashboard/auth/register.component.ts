import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
const TEMPLATE = require('./register.component.html')

import { UserService } from '../shared/services'

@Component({
  selector: 'register',
  template: TEMPLATE
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup
  isSubmitting: boolean

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'name': ['', Validators.required],
      'image_url': [''],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  submit() {
    this.isSubmitting = true

    let attributes = this.authForm.value
    this.userService.create(attributes).subscribe(
      data => this.router.navigate(['/']),
      err => this.isSubmitting = false
    )
  }

}
