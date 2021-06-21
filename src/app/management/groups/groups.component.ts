import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
// component
import { GroupDialogComponent } from "./group-dialog/group-dialog.component";
// model
import { Group } from '../../_models/group';
// service
import { MenuService } from 'src/app/_services/menu.service';
import { GroupService } from 'src/app/_services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Group>();
  displayedColumns = ['select', 'icons', 'Name', 'UserCount', 'ProCount'];

  filter$ = new Subject<string>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  selection = new SelectionModel<Group>(true, []);

  constructor(
    private dialog: MatDialog,
    private menuService: MenuService,
    private groupService: GroupService,
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

  checkboxLabel(row?: Group): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id + 1}`;
  }

  handlePage(event: any) {
    this.selection.clear();
  }

  // 取得 group 列表
  fetchGroupList() {
    this.groupService.fetchGroup().subscribe(res => {
      if (!!res) {
        this.dataSource.data = res;
      }
    });
  }

  // 新增
  onClickAdd() {
    this.openDialog();
  }

  // 編輯
  onClickEdit() {

  }

  // 刪除
  onClickDelete() {

  }

  private openDialog(data?: Group) {
    const dialogRef = this.dialog.open(GroupDialogComponent, {
      width: '450px',
      data: data,
    });

    dialogRef.afterClosed().pipe<boolean>(
      filter(p => !!p),
    ).subscribe(() => {
      this.fetchGroupList();
    });
  }

  ngOnInit(): void {
    // menu
    this.menuService.changeMenu('Mangement');
    // TODO:Breadcrumb - Group

    // groups
    this.fetchGroupList();

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
