import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Routing } from '../_models/routing.enum';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private defaultBread = { text: 'Home', link: '/' };
  private _breadcrumb$ = new BehaviorSubject([this.defaultBread]);

  get breadcrumb$() {
    return this._breadcrumb$.asObservable();
  }

  changeBreadcrumb(list: Routing[]) {
    const data = list.map(p => ({ text: p, link: p }));
    this._breadcrumb$.next([this.defaultBread, ...data]);
  }

  constructor() { }
}
