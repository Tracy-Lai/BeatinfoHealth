import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { User } from '../_models/user';

const uid_NAME = 'uid';

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

  setUID(uid: string) {
    localStorage.setItem(uid_NAME, uid);
  }

  getUID() {
    return localStorage.getItem(uid_NAME);
  }

  // 登入
  login(uid: string, token: string, redirect = true) {
    return this.http.post<any>('/Login', {
      IdToken: token,
    }).pipe(
      tap(() => {
        this.setUID(uid);
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
      this.router.navigate(['/login']);
      localStorage.clear();
    });
  }

  // 判斷是否登入
  hasLogin() {
    return !!this.getUID();
  }

  // TODO::重新取得 token
  refreshToken() {
    this.http.get<any>('/Refresh').pipe(
      catchError(p => {
        this.logout();
        return of(true);
      }),
    ).subscribe(res => {
      console.log(res)
      localStorage.setItem('access_token', res.Data.access_token);
      localStorage.setItem('refresh_token', res.Data.refresh_token);
    });
  }
}
