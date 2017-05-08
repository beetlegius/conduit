import { Injectable } from '@angular/core'
import { Http, Response, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { ApiService } from './api.service'
import { Article } from '../models'

@Injectable()
export class ArticlesService {
  private base_url : string = '/articles/'

  constructor(
    private http: Http,
    private api: ApiService
  ) { }

  public all(page: number = null, size: number = null) : Observable<{articles: Article[], articlesCount: number}> {
    return this.query(this.base_url, page, size)
  }

  public feed(page: number = null, size: number = null) : Observable<{articles: Article[], articlesCount: number}> {
    return this.query(this.base_url + 'feed', page, size)
  }

  public user(slug: string, page: number = null, size: number = null) : Observable<{articles: Article[], articlesCount: number}> {
    return this.query('/users/' + slug + this.base_url, page, size)
  }

  public find(id: number|string) : Observable<any> {
    return this.api.get(this.base_url + id)
  }

  public create(article: Article) : Observable<Article> {
    return this.api.post(this.base_url, {article: article })
  }

  public update(article: Article) : Observable<Article> {
    return this.api.patch(this.base_url + article.slug, {article: article})
  }

  public destroy(id: number|string) : Observable<Article> {
    return this.api.delete(this.base_url + id)
  }

  private query(url: string, page: number = 1, size: number = 50) : Observable<{articles: Article[], articlesCount: number}> {
    let params: URLSearchParams = new URLSearchParams()

    params.set("page[number]", page.toString())
    params.set("page[size]", size.toString())

    return this.api.get(url, params)
  }

}
