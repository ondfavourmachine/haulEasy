import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import {HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthorizationInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private http: HttpClient) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   const newRequest = req.clone({
  //       setHeaders: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
  //   });
  //   return next.handle(newRequest).pipe(
  //       tap(
  //           (success) => {},
  //           (error) => {
  //               if (error.status === 401 ) {
  //                   this.router.navigate(['/']);
  //               }
  //           }
  //       )
  //   );
  // }
  // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({setHeaders: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4040'}
    });
    return next.handle(newRequest);
  }


}
