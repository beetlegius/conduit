import { Component } from '@angular/core'
const TEMPLATE = require('./article-form.component.html')

import { ArticleFormComponent } from './article-form.component'

@Component({
  selector: 'article-form-new',
  template: TEMPLATE
})

export class ArticleFormNewComponent extends ArticleFormComponent {

  ngOnInit() {
    super.ngOnInit()
    console.log('loading')
  }

  save(){
    alert('save! puta madre')
  }

}
