import { Component } from '@angular/core'
const TEMPLATE = require('./article-form.component.html')

import { ArticleFormComponent } from './article-form.component'

@Component({
  selector: 'article-form-edit',
  template: TEMPLATE
})

export class ArticleFormEditComponent extends ArticleFormComponent {

  ngOnInit(){
    super.ngOnInit()
    console.log('editing')
  }

  save(){
    alert('save! desde el update la puta que lo parió')
  }

}
