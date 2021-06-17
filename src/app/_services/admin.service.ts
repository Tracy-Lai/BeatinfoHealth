import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';

import { Admin } from '../_models/admin';

import { OrganizationService } from './organization.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
    private organizationService: OrganizationService,
  ) { }

  // 取得管理員清單 依組織權限
  fetchAuthorityOrganization() {
    const organization_id = this.organizationService.getOrganizationId();
    if (!!organization_id) {
      return this.http.get<Admin[]>('/Authority/Organization', {
        params: {
          organization_id: organization_id,
        },
      }).pipe(
        retry(2),
        map((data: any) => {
          return data.Data;
        }),
      );
    } else {
      return this.http.get<undefined>('');
    }
  }

  // 取得管理員清單 依服務權限
  fetchAuthorityService() {
    return this.http.get<Admin[]>('/Authority/Service', {
      params: {
        service_id: '1',
      },
    }).pipe(
      retry(2),
      map((data: any) => {
        return data.Data;
      }),
    );
  }
}
