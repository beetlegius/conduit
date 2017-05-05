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

  all(page: number = null, size: number = null) : Observable<{articles: Article[], articlesCount: number}> {
    return this.query(this.base_url, page, size)
  }

  feed(page: number = null, size: number = null) : Observable<{articles: Article[], articlesCount: number}> {
    return this.query(this.base_url + 'feed', page, size)
  }

  query(url: string, page: number = 1, size: number = 50) : Observable<{articles: Article[], articlesCount: number}> {
    let params: URLSearchParams = new URLSearchParams()

    params.set("page[number]", page.toString())
    params.set("page[size]", size.toString())

    return this.api.get(url, params)
  }

  find(id: number) : Observable<Article> {
    return this.http.get(this.base_url + id).map( (res: Response) => res.json() )
  }

  create(article: Article) : Observable<Article> {
    return this.http.post(this.base_url, article).map( (res: Response) => res.json() )
  }

  update(id: number, article: Article) : Observable<Article> {
    return this.http.patch(this.base_url + id, article).map( (res: Response) => res.json() )
  }

  destroy(id: number) : Observable<Article> {
    return this.http.delete(this.base_url + id).map( (res: Response) => res.json() )
  }

}
