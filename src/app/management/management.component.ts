import { Component, OnInit } from '@angular/core';

import { MenuService } from '../_services/menu.service';
import { BreadcrumbService } from 'src/app/_services/breadcrumb.service';
import { Routing } from '../_models/routing.enum';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor(
    private menuService: MenuService,
    private breadService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    // menu
    this.menuService.changeMenu('Mangement');
    // Breadcrumb - Management
    // this.breadService.changeBreadcrumb([Routing.Management]);
  }

}
