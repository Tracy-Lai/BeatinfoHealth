import { Component, OnInit } from '@angular/core';

// Breadcrumb
import { BreadcrumbService } from '../_services/breadcrumb.service';
import { Routing } from '../_models/routing.enum';

import { MenuService } from '../_services/menu.service';

@Component({
  selector: 'app-orginazations',
  templateUrl: './orginazations.component.html',
  styleUrls: ['./orginazations.component.scss']
})
export class OrginazationsComponent implements OnInit {

  constructor(
    private menuService: MenuService,
    private breadService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    // menu
    this.menuService.changeMenu('Orginazation');
    // Breadcrumb - Orginazations
    this.breadService.changeBreadcrumb([Routing.Orginazations]);

  }

}
