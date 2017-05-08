import { Component, OnInit, Input } from '@angular/core'
const TEMPLATE = require('./articles-list.component.html')
import { Observable } from 'rxjs/Observable'

import { ArticlesService } from '../shared/services'
import { Article, User } from '../shared/models'

@Component({
  selector: 'articles-list',
  template: TEMPLATE
})
export class ArticlesListComponent implements OnInit {
  @Input() feed: boolean = false
  @Input() user: Observable<User>
  articles: Article[]

  loading: boolean = false
  currentPage: number = 1
  pageSize: number = 20
  totalPages: Array<number> = [1]

  constructor(
    private service: ArticlesService
  ) { }

  ngOnInit() {
    this.get()
  }

  setPageTo(pageNumber) {
    if (pageNumber != this.currentPage) {
      this.currentPage = pageNumber
      this.get()
    }
  }

  get() {
    this.loading = true

    const getArticles = (data) => {
      this.articles   = data.articles
      this.loading    = false

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.pagination.total_pages / data.pagination.page_size)), (val, index) => index + 1)
    }

    if (this.feed)
      this.service.feed(this.currentPage, this.pageSize).subscribe(getArticles)
    else if (this.user)
      this.user.subscribe(
        (u) => {
          alert(u)
          this.service.user(u.slug, this.currentPage, this.pageSize).subscribe(getArticles)
        }
      )
    else
      this.service.all(this.currentPage, this.pageSize).subscribe(getArticles)

  }

}
