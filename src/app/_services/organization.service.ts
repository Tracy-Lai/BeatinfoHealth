import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Organization, OrganizationDialog } from '../_models/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  private _filterOrganization$ = new BehaviorSubject<string>('');

  get filterOrganization$() {
    return this._filterOrganization$.asObservable();
  }

  setOrganizationId(id: number) {
    localStorage.setItem('OrganizationId', String(id));
    this.changeFilterOrganization();
  }

  getOrganizationId() {
    return localStorage.getItem('OrganizationId');
  }

  removeOrganizationId() {
    localStorage.removeItem('OrganizationId');
    this.changeFilterOrganization();
  }

  changeFilterOrganization() {
    const Id = Number(this.getOrganizationId());
    this._filterOrganization$.next('選擇組織');
    if (!!Id) {
      this.fetchOrganization('1').subscribe(res => {
        res.map((filterOrganization: Organization) => {
          if (filterOrganization.Id == Id) {
            this._filterOrganization$.next(filterOrganization.Name);
          }
        });
      });
    }
  }

  // 取得服務組織清單 (依權限取得資料)
  fetchOrganization(service_id: string) {
    return this.http.get<Organization[]>('/Organization', {
      params: {
        service_id: service_id,
      },
    }).pipe(
      retry(2),
      map((data: any) => {
        // TODO:: 移除假資料
        data.Data = [{ Id: '1', Name: '組織 1', ServiceId: '1' }, { Id: '2', Name: '組織 2', ServiceId: '1' }, { Id: '3', Name: '組織 3', ServiceId: '1' }];
        return data.Data;
      }),
    );
  }

  // 新增服務群組清單
  createOrganization(data: OrganizationDialog) {
    return this.http.post('/Organization/Create', {
      Id: 0,
      Name: data.Name,
      ServiceId: 1,
    }).pipe(
      map((data: any) => {
        return data;
      }),
    );
  }

  // 更新服務群組清單
  updateOrganization(id: number, data: OrganizationDialog) {
    return this.http.post('/Organization/Update', {
      Id: id,
      Name: data.Name,
      ServiceId: 1,
    }).pipe(
      map((data: any) => {
        return data;
      }),
    );
  }

  // 刪除服務群組清單
  deleteOrganization(id: number, data: OrganizationDialog) {
    return this.http.post('/Organization/Delete', {
      Id: id,
      Name: data.Name,
      ServiceId: 1,
    }).pipe(
      map((data: any) => {
        return data;
      }),
    );
  }

}
