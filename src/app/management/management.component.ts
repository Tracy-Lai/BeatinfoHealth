import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { MenuService } from '../_services/menu.service';
import { BreadcrumbService } from 'src/app/_services/breadcrumb.service';
import { Routing } from '../_models/routing.enum';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  // menu
  menu$ = this.menuService.menu$;

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private menuService: MenuService,
    private breadService: BreadcrumbService,
  ) { }

  clickSidenav() {
    if (this.sidenav.mode == 'over') {
      this.sidenav.close();
    }
  }

  ngOnInit(): void {
    // menu
    this.menuService.changeMenu('Mangement');
    // Breadcrumb - Management
    // this.breadService.changeBreadcrumb([Routing.Management]);
  }

  ngAfterViewInit(): void {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else if (this.sidenav.mode == 'over') {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
