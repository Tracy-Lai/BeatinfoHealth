import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginatorIntl, MatPaginatorDefaultOptions } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filterOrgId: number | undefined;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private matPaginatorIntl: MatPaginatorIntl,
    private observer: BreakpointObserver,
  ) { }

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
      console.log(res)
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
