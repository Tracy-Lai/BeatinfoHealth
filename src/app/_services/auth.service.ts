import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user: User;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fireAuth: AngularFireAuth,
  ) { }

  // 登入
  login(token: string, redirect = true) {
    return this.http.post<any>('/Login', {
      IdToken: token,
    }).pipe(
      tap(() => {

      }),
      catchError(p => {
        this.logout();
        return of(true);
      }),
    );
  }

  // 登出
  logout() {
    this.fireAuth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }

  // 判斷是否登入
  hasLogin() {
    return !!localStorage.getItem('access_token');
  }
}
