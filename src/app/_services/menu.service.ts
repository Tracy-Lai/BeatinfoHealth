import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// 模擬資料
import { Menus, MangementMenus } from '../_services/mock/menus';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private defaultMenu = Menus;
  // private _menu$ = Menus;
  private _menu$ = new BehaviorSubject(this.defaultMenu);


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
      this._menu$.next(Menus);
    }
  }
}
