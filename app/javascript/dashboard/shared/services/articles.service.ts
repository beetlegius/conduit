import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
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

  all() : Observable<Article[]> {
    return this.api.get(this.base_url)
  }

  feed() : Observable<Article[]> {
    return this.api.get(this.base_url + 'feed')
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
