import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetQuoteService {

  url;
  constructor(private http: HttpClient ) {
    this.url = environment.baseApiUrl + 'api/';
  }

  getQuote(data) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    return this.http.post(this.url + 'get-quote', data, {headers}).pipe(
      map(
        (response: HttpResponse<any>) => {
          return response;
        }
      )
    );
  }
}
