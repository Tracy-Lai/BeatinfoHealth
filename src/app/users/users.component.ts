import { Component, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// model
import { User } from '../models/user';

// 模擬資料
import { Users } from '../services/mock/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataSource = new MatTableDataSource<User>();
  displayedColumns = ['select', 'icons', 'Name', 'Phone', 'Mail'];

  constructor() { }

  ngOnInit(): void {

    // users
    this.dataSource.data = Users;
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.dataSource);
  }

}
