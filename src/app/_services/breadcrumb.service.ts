import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RoutingBreadcrumb } from '../_models/routing.enum';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private defaultBread = RoutingBreadcrumb.filter(route => route.routing == 'Home');
  private _breadcrumb$ = new BehaviorSubject([this.defaultBread[0]]);

  constructor() { }

  get breadcrumb$() {
    return this._breadcrumb$.asObservable();
  }

  changeBreadcrumb(list: any[], homeBread: boolean = true) {

    const data = list.map(p => {
      return RoutingBreadcrumb.filter(route => route.routing == p);
    });

    console.log(data);

    this._breadcrumb$.next([this.defaultBread,...data[0]]);
  }
}
