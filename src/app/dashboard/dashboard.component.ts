import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
// Breadcrumb
import { BreadcrumbService } from '../_services/breadcrumb.service';
import { MenuService } from '../_services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(
    private menuService: MenuService,
    private breadService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    // menu
    this.menuService.changeMenu('Home');

    // Breadcrumb
    //this.breadService.changeBreadcrumb([]);
  }

  ngOnDestroy() {
  }
}
