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
    this.title = 'Add article'
    this.description = 'Complete the fields please, and press Create Article.'
    this.buttonLabel = 'Create article'
  }

  save(){
    this.service.create(this.article).subscribe( (data) => this.router.navigate(['/']))
  }

}
