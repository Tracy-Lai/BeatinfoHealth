import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { concatMap, map, mergeMap, toArray } from 'rxjs/operators';
// import { differenceInMinutes, parseISO } from 'date-fns';

import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // 取得 user 列表
  fetchUserList() {
    return this.http.get<User[]>('/User/GetList');
  }

  constructor(private http: HttpClient) { }
}
