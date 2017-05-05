import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
const TEMPLATE = require('./articles-form.component.html')

import { Article } from '../shared/models'
import { ArticlesService } from '../shared/services'

@Component({
    selector: 'articles-form',
    template: TEMPLATE
})

export abstract class ArticlesFormComponent implements OnInit {

  article: Article
  articleForm: FormGroup
  isSubmitting: boolean

  constructor(
    private service: ArticlesService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ''
    })
  }

}
