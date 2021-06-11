import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './../_services/auth.service';
import { SpinnerService } from '../_share/spinner/spinner.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private spinnerService: SpinnerService,
  ) { }

  token = localStorage.getItem('access_token');

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.spinnerService.requestStarted();
    const req = request.clone({
      ...request,
      // withCredentials: true,
      setHeaders: {Authorization: this.token || ''},
      // setHeaders: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Credentials': 'true',
      //   'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS, PATCH',
      //   'content-type': 'application/json',
      // },
      url: environment.apiUri + request.url
    });
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.spinnerService.requestEnded();
          }
        },
        (error: HttpErrorResponse) => {
          this.spinnerService.resetSpinner();
        }
      ),
    );
  }
}
