import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

// service
import { MenuService } from 'src/app/_services/menu.service';
import { AdminService } from 'src/app/_services/admin.service';

import { Admin } from '../../_models/admin';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Admin>();
  displayedColumns = ['select', 'icons', 'Name'];

  filter$ = new Subject<string>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  selection = new SelectionModel<Admin>(true, []);

  constructor(
    private menuService: MenuService,
    private adminService: AdminService,
  ) { }

  getPageData() {
    return this.dataSource._pageData(this.dataSource._orderData(this.dataSource.filteredData));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.getPageData().length;

    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.getPageData().forEach(row => this.selection.select(row));
    // this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Admin): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id + 1}`;
  }

  handlePage(event: any) {
    this.selection.clear();
  }

  // 取得 admin 列表
  fetchAuthorityOrganizationList() {
    this.adminService.fetchAuthorityOrganization().subscribe(res => {
      if (!!res) {
        this.dataSource.data = res;
      }
    });
  }

  //
  onClickAdd() {
    console.log('add');
  }

  onClickDelete() {

  }

  ngOnInit(): void {
    // menu
    this.menuService.changeMenu('Mangement');
    // TODO:Breadcrumb - Admin

    // admins
    this.fetchAuthorityOrganizationList();

    // filter
    this.filter$.pipe(
      debounceTime(500)
    ).subscribe(p => {
      this.selection.clear();
      this.dataSource.filter = p;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
