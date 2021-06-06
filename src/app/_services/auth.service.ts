import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const TOKEN_NAME = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  // 登入
  login(username: string, password: string) {
    return this.http.post<any>('/User/Login', {
      username: username,
      password: password,
    }).pipe(
      tap(data => {
        // console.log(data);
        localStorage.setItem(TOKEN_NAME, data);
      }),
    );
  }

  // 登出
  logout() {
    localStorage.removeItem(TOKEN_NAME);
    this.router.navigate(['/login']);
  }

  // 判斷是否登入
  hasLogin() {
    // TODO:
    return true;
    return !!localStorage.getItem(TOKEN_NAME);
  }
}
