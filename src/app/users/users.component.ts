import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator,MatPaginatorIntl } from '@angular/material/paginator';

// model
import { User } from '../models/user';

// 模擬資料
import { Users } from '../services/mock/users';

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

  constructor(private matPaginatorIntl: MatPaginatorIntl) {
  }

  ngOnInit(): void {
    // users
    this.dataSource.data = Users;
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
