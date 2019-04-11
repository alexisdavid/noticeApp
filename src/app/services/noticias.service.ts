import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { respuestaTopHeadline } from '../interfaces/notice.interface'


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<respuestaTopHeadline>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0aaa10ee9db417cabbef39a99480f28`)
  }

}
