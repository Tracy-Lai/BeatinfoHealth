import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl, MatPaginatorDefaultOptions } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';

// model
import { Orginazation } from '../_models/orginazation';
// 模擬資料
import { Menus } from '../_services/mock/menus';

import { AuthService } from './../_services/auth.service';
import { OrginazationService } from './../_services/orginazation.service';
import { OrganizationDialogComponent } from './organization-dialog/organization-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // 選擇組織
  filterOrginazations: Orginazation[] = [
    { OrginazationId: '1', Name: '組織 1' },
    { OrginazationId: '2', Name: '組織 2' },
  ];
  filterOrginazationId: string | null;

  menusData = Menus;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private authService: AuthService,
    private orginazationService: OrginazationService,
    private dialog: MatDialog,
    private matPaginatorIntl: MatPaginatorIntl,
    private observer: BreakpointObserver,
    private router: Router,
  ) {
    this.filterOrginazationId = orginazationService.getOrginazationId();
  }

  // 組織
  openDialogOrganization() {
    const dialogRef = this.dialog.open(OrganizationDialogComponent, {
      width: '450px',
      data: {
        filterOrginazationId: this.filterOrginazationId,
        filterOrginazations: this.filterOrginazations,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filterOrginazationId = result;
        this.orginazationService.setOrginazationId(result);
        this.router.navigate(['/']);
      }
    });
  }

  // 登出
  clickLogout() {
    this.authService.logout();
  }

  // 初始化
  ngOnInit(): void {
    // 設定分頁預設選項
    // 設定分頁顯示資訊文字
    this.matPaginatorIntl.itemsPerPageLabel = '每頁筆數：';
    this.matPaginatorIntl.nextPageLabel = '下一頁';
    this.matPaginatorIntl.previousPageLabel = '上一頁';
    this.matPaginatorIntl.firstPageLabel = '第一頁';
    this.matPaginatorIntl.lastPageLabel = '最終頁';
    this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
      if (length === 0 || pageSize === 0) {
        return `第 0 筆`;
      }

      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

      return `第 ${startIndex + 1} - ${endIndex} 筆`;
    };
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
