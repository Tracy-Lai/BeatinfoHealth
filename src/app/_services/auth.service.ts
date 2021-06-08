import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { User } from '../_models/user';

const TOKEN_NAME = 'token';
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

  setToken(token: string) {
    localStorage.setItem(TOKEN_NAME, token);
  }

  setUID(uid: string) {
    localStorage.setItem(uid_NAME, uid);
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }

  getUID() {
    return localStorage.getItem(uid_NAME);
  }

  // 登入
  login(uid: string, redirect = true) {
    return this.http.post<any>('/User/Login', {
      UUID: uid,
      FromWebSite: 1,
    }).pipe(
      tap(({ Authority }) => {
        // this.permissionList = Authority;
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
    return true;
    return !!this.getUID();
  }
}
