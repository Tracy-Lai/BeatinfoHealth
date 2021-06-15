import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

// model
import { Routing } from '../../_models/routing.enum';
import { User } from '../../_models/user';

// service
import { BreadcrumbService } from '../../_services/breadcrumb.service';
import { UserService } from '../../_services/user.service';
import { MenuService } from 'src/app/_services/menu.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<User>();
  displayedColumns = ['select', 'icons', 'Name', 'PhoneNumber', 'Mail'];

  filter$ = new Subject<string>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  selection = new SelectionModel<User>(true, []);

  constructor(
    private userService: UserService,
    private menuService: MenuService,
    private breadService: BreadcrumbService,
  ) { }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id + 1}`;
  }

  // 取得 user 列表
  fetchUserList() {
    this.userService.fetchUserAll().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  ngOnInit(): void {
    // menu
    this.menuService.changeMenu('Mangement');
    // Breadcrumb - User
    this.breadService.changeBreadcrumb([Routing.Users]);

    // users
    this.fetchUserList();

    // filter
    this.filter$.pipe(
      debounceTime(500)
    ).subscribe(p => {
      this.dataSource.filter = p;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
