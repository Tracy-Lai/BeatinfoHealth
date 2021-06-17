import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';

import { Group } from '../_models/group';

import { OrganizationService } from './organization.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http: HttpClient,
    private organizationService: OrganizationService,
  ) { }

  // 取得組織群組清單
  fetchGroup() {
    const organization_id = this.organizationService.getOrganizationId();
    if (!!organization_id) {
      return this.http.get<Group[]>('/Group', {
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

}
