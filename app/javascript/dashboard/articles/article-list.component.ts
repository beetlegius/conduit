import { Component, OnInit, Input } from '@angular/core'
const TEMPLATE = require('./article-list.component.html')
import { Observable } from 'rxjs/Observable'

import { ArticlesService } from '../shared/services'
import { Article } from '../shared/models'

@Component({
  selector: 'article-list',
  template: TEMPLATE
})
export class ArticleListComponent implements OnInit {
  @Input() feed: boolean = false
  articles: Article[]

  loading: boolean = false
  currentPage: number = 1
  totalPages: Array<number> = [1]

  constructor(
    private service: ArticlesService
  ) { }

  ngOnInit() {
    this.get()
  }


  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.get();
  }

  get() {
    this.loading = true
    const getArticles = (articles) => {
      this.articles = articles
      this.loading = false
    }
    if (this.feed)
      this.service.feed().subscribe(getArticles)
    else
      this.service.all().subscribe(getArticles)
  }

}
