import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
// Breadcrumb
import { BreadcrumbService } from '../_services/breadcrumb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(
    private breadService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    // Breadcrumb
    this.breadService.changeBreadcrumb([]);
  }

  ngOnDestroy() {
  }
}
