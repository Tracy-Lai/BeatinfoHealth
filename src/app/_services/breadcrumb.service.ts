import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Routing } from '../_models/routing.enum';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private defaultBread = { text: 'Home', link: '/' };
  private _breadcrumb$ = new BehaviorSubject([this.defaultBread]);

  constructor() { }

  get breadcrumb$() {
    return this._breadcrumb$.asObservable();
  }

  changeBreadcrumb(list: Routing[], homeBread: boolean = true) {
    const data = list.map(p => ({ text: p, link: p }));
    if (homeBread) {
      this._breadcrumb$.next([this.defaultBread, ...data]);
    } else {
      this._breadcrumb$.next([...data]);
    }
  }
}
