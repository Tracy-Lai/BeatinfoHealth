import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, throwError } from 'rxjs';
import { concatMap, map, mergeMap, toArray, catchError, retry } from 'rxjs/operators';
// import { differenceInMinutes, parseISO } from 'date-fns';

import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // 取得所有使用者
  fetchUserAll() {
    return this.http.get<User[]>('/User/All').pipe(
      retry(2),
      map((data: any) => {
        return data.Data;
      }),
    );
  }

  // 取得使用者服務權限
  fetchUserPermissionService() {
    return this.http.get<any>('/User/Permission/Service').pipe(retry(2));
  }

}
