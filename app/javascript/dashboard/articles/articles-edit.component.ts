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
    this.title = 'Editing article'
    this.description = "Please don't look back in anger."
    this.buttonLabel = 'Update article'

    this.route.params.subscribe(
      (params) => this.service.find(params['id']).subscribe(
        (data) => this.article = data.article,
        (err) => this.router.navigate(['/'])
      )
    )
  }

  save(){
    this.service.update(this.article).subscribe(
      (data) => this.router.navigate(['/'])
    )
  }

}
