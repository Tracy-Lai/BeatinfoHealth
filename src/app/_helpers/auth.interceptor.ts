import {
  finalize,
  retryWhen,
  take,
  tap,
  mergeMap,
  catchError,
  retry
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  HttpClient
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';

import { AuthService } from './../_services/auth.service';
import { SpinnerService } from '../_share/spinner/spinner.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  token: String | null | undefined;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private spinnerService: SpinnerService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    this.spinnerService.requestStarted();

    if (request.url.includes("Refresh")) {
      this.token = localStorage.getItem('refresh_token');
    } else {
      this.token = localStorage.getItem('access_token');
    }

    const req = request.clone({
      ...request,
      setHeaders: { Authorization: 'Bearer ' + this.token || '' },
      // setHeaders: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Credentials': 'true',
      //   'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS, PATCH',
      //   'content-type': 'application/json',
      // },
      url: environment.apiUri + request.url
    });

    if (request.url.includes("Refresh")) {
      return next.handle(req).pipe(
        tap((event) => {
          this.spinnerService.requestEnded();
        })
      );
    }

    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            if (event.body.StatusCode == 0) {
              event.body.Data;
            }
            if (event.body.StatusCode == 100 || event.body.StatusCode == 101) {
              throw new Error(event.body.StatusCode);
            }
          }
        },
        (error: HttpErrorResponse) => {
        }
      ),
      retryWhen((errors: Observable<any>) => errors.pipe(
        mergeMap((error, index) => {

          if (index === 0) {
            return this.refreshToken();
          }

          return throwError(error);
        }),
        take(2),
      )),
      retry(1),
      finalize(() => {
        this.spinnerService.resetSpinner();
      })
    );
  }

  private refreshToken(): Observable<any> {
    this.http.get<any>('/Refresh').pipe(
      catchError(p => {
        this.authService.logout();
        return of(true);
      }),
    ).subscribe(res => {
      localStorage.setItem('access_token', res.Data.access_token);
      localStorage.setItem('refresh_token', res.Data.refresh_token);
    });
    return of("refresh token");
  }

}
