import { Component } from '@angular/core'
const TEMPLATE = require('./articles-form.component.html')

import { ArticlesFormComponent } from './articles-form.component'

@Component({
  selector: 'articles-new',
  template: TEMPLATE
})

export class ArticlesNewComponent extends ArticlesFormComponent {

  ngOnInit() {
    super.ngOnInit()
    console.log('loading')
  }

  save(){
    alert('save! puta madre')
  }

}
