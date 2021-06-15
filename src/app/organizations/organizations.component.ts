import { OrganizationService } from './../_services/organization.service';
import { Component, OnInit } from '@angular/core';

// Breadcrumb
import { BreadcrumbService } from '../_services/breadcrumb.service';
import { Routing } from '../_models/routing.enum';

import { MenuService } from '../_services/menu.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  constructor(
    private menuService: MenuService,
    private breadService: BreadcrumbService,
    private organizationService: OrganizationService,
  ) { }


  // 取得 服務組織清單
  fetchOrganizationList() {
    this.organizationService.fetchOrganization('1').subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    // menu
    this.menuService.changeMenu('Organization');
    // Breadcrumb - Organizations
    this.breadService.changeBreadcrumb([Routing.Organizations]);

    this.organizationService.removeOrganizationId();

    // organizations
    this.fetchOrganizationList();
  }

}
