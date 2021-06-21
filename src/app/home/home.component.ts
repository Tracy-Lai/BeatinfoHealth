import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';

// service
import { AuthService } from './../_services/auth.service';
import { OrganizationService } from '../_services/organization.service';
// component
import { OrganizationDialogComponent } from './organization-dialog/organization-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // 選擇組織
  filterOrganization$ = this.organizationService.filterOrganization$;

  constructor(
    private authService: AuthService,
    private organizationService: OrganizationService,
    private dialog: MatDialog,
    private matPaginatorIntl: MatPaginatorIntl,
    private router: Router,
  ) {
  }

  // 組織
  openDialogOrganization() {
    const dialogRef = this.dialog.open(OrganizationDialogComponent, {
      data: {
        filterOrganizationId: this.organizationService.getOrganizationId(),
      }
    });

    dialogRef.afterClosed().subscribe(Id => {
      if (Id) {
        this.organizationService.setOrganizationId(Id);
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
    // 組織
    this.organizationService.changeFilterOrganization();
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

  }
}
