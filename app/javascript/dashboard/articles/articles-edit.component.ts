import { Component } from '@angular/core'
const TEMPLATE = require('./articles-form.component.html')

import { ArticlesFormComponent } from './articles-form.component'

@Component({
  selector: 'articles-edit',
  template: TEMPLATE
})

export class ArticlesEditComponent extends ArticlesFormComponent {

  ngOnInit(){
    super.ngOnInit()
    console.log('editing')
  }

  save(){
    alert('save! desde el update la puta que lo parió')
  }

}
