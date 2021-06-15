import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  setOrganizationId(id: string) {
    localStorage.setItem('OrganizationId', id);
  }

  getOrganizationId() {
    return localStorage.getItem('OrganizationId');
  }

  // 取得服務組織清單 (user 依權限取得資料)
  fetchOrganization(id: string) {
    return this.http.get<any>('/Organization', {
      params: {
        service_id: id,
      },
    }).pipe(
      retry(2),
      map((data: any) => {
        return data.Data;
      }),
    );
  }

  // 取得服務所有組織清單 (admin)
  fetchOrganizationAll(id: string) {
    return this.http.get<any>('/Organization/All', {
      params: {
        service_id: id,
      },
    }).pipe(
      retry(2),
      map((data: any) => {
        return data.Data;
      }),
    );
  }

}
