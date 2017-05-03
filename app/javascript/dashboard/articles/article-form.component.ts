import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
const TEMPLATE = require('./article-form.component.html')

import { Article } from '../shared/models'
import { ArticlesService } from '../shared/services'

@Component({
    selector: 'article-form',
    template: TEMPLATE
})

export abstract class ArticleFormComponent implements OnInit {

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
