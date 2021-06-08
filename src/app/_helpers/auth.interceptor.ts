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

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.spinnerService.requestStarted();
    const req = request.clone({
      ...request,
      setHeaders: {Authorization: this.authService.getToken() || ''},
      url: environment.apiUri + request.url
    });
    console.log(this.authService.getToken());
    console.log(req);
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.spinnerService.requestEnded();
          }
        },
        (error: HttpErrorResponse) => {
          console.log('error HttpErrorResponse');
          this.spinnerService.resetSpinner();
        }
      ),
    );
    // return next.handle(req);
  }
}
