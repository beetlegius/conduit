import { Component, OnInit } from '@angular/core'
const TEMPLATE = require('./footer.component.html')

@Component({
  selector: 'layout-footer',
  template: TEMPLATE
})
export class FooterComponent implements OnInit {
  date: Date

  constructor() {}

  ngOnInit() {
    this.date = new Date()
  }
}
