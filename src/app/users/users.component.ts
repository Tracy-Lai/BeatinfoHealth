import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

// model
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
// Breadcrumb
import { BreadcrumbService } from '../_services/breadcrumb.service';
import { Routing } from '../_models/routing.enum';
// 模擬資料
import { Users } from '../_services/mock/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<User>();
  displayedColumns = ['select', 'icons', 'Name', 'Phone', 'Mail'];

  filter$ = new Subject<string>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private userService: UserService,
    private breadService: BreadcrumbService,
  ) { }

  // TODO:: 取得 user 列表
  fetchUserList() {
    this.userService.fetchUserList().subscribe(p => {
      // this.dataSource.data = p;
      this.dataSource.data = Users;
    });
  }

  ngOnInit(): void {
    // Breadcrumb - User
    this.breadService.changeBreadcrumb([Routing.User]);

    // users
    this.fetchUserList();

    // filter
    this.filter$.pipe(
      debounceTime(300)
    ).subscribe(p => {
      this.dataSource.filter = p;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
