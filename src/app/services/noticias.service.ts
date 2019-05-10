import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { respuestaTopHeadline } from '../interfaces/notice.interface'
import { environment } from '../../environments/environment';

const apikey = environment.apikey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apikey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  pageNotice = 0;


  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {

    query = apiUrl + query;

    return this.http.get<T>(query, { headers })

  }

  getTopHeadlines() {
    this.pageNotice++;

    return this.executeQuery<respuestaTopHeadline>(`/top-headlines?country=mx&page=${this.pageNotice}`);

    // maneras de enviar la peticion;
    // hecha por mi:
    // return this.http.get<respuestaTopHeadline>(`${apiUrl}/top-headlines?country=us&apiKey=${apikey}`);

    // primer peticion antes de optimizar, como aparece en la documentacion:
    // return this.http.get<respuestaTopHeadline>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=d0aaa10ee9db417cabbef39a99480f28`)
  }

  getTopHeadlinesCategory(categoria: string) {


    return this.executeQuery<respuestaTopHeadline>(`/top-headlines?country=mx&category=${categoria}`);
    // return this.http.get<respuestaTopHeadline>(`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=d0aaa10ee9db417cabbef39a99480f28`)
  }

}
