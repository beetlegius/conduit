import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
const TEMPLATE = require('./articles-form.component.html')

import { Article } from '../shared/models'
import { ArticlesService } from '../shared/services'

@Component({
  selector: 'articles-form',
  template: TEMPLATE
})

export abstract class ArticlesFormComponent implements OnInit {

  protected title: string
  protected description: string
  protected buttonLabel: string

  article: Article
  articleForm: FormGroup
  isSubmitting: boolean

  constructor(
    protected service: ArticlesService,
    protected router: Router,
    protected route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.article = new Article()
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ''
    })
  }

}
