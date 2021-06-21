import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Menu } from '../_models/menu';
// 模擬資料
import { Menus, MangementMenus } from '../_services/mock/menus';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // private _menu$ = Menus;
  private _menu$ = new BehaviorSubject<Menu[] | null>(null);

  constructor(
  ) { }

  get menu$() {
    return this._menu$.asObservable();
  }

  changeMenu(menu: string) {

    // this.userService.fetchUserPermissionService().subscribe(res => {
    // });

    if (menu == 'Mangement') {
      this._menu$.next(MangementMenus);
    } else {
      this._menu$.next(null);
    }
  }
}
