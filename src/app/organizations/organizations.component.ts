import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
// component
import { DialogDeleteComponent } from "../_components/dialog-delete/dialog-delete.component";
import { OrganizationDialogComponent } from "./organization-dialog/organization-dialog.component";
// Breadcrumb
import { BreadcrumbService } from '../_services/breadcrumb.service';
import { Routing } from '../_models/routing.enum';
// model
import { Organization } from '../_models/organization';
// service
import { SnackbarService } from '../_services/snackbar.service';
import { MenuService } from '../_services/menu.service';
import { OrganizationService } from './../_services/organization.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  organizations: Organization[] = [];

  constructor(
    private dialog: MatDialog,
    private breadService: BreadcrumbService,
    private snackbarService: SnackbarService,
    private organizationService: OrganizationService,
  ) {
  }

  // 取得 服務組織清單
  fetchOrganizationList() {
    this.organizationService.fetchOrganization('1').subscribe(res => {
      this.organizations = res;
    });
  }

  // 選擇組織
  chooseOrganization(id: number) {
    this.organizationService.setOrganizationId(id);
  }

  // 新增組織
  onClickCreate() {
    this.openDialog();
  }

  // 編輯組織
  onClickUpdate(organization: Organization) {
    // console.log(organization)
    this.openDialog(organization);
  }

  private openDialog(data?: Organization) {
    const dialogRef = this.dialog.open(OrganizationDialogComponent, {
      data: data,
    });

    dialogRef.afterClosed().pipe<boolean>(
      filter(p => !!p),
    ).subscribe(() => {
      this.fetchOrganizationList();
    });
  }

  // 刪除組織
  onClickDelete(organization: Organization) {
    const dialogDelete = this.dialog.open(DialogDeleteComponent, {});

    dialogDelete.afterClosed().subscribe(result => {
      if (result) {
        this.organizationService.deleteOrganization(organization.Id, organization).subscribe((res) => {
          this.snackbarService.delete(res.StatusCode);
          this.fetchOrganizationList();
        });
      }
    });
  }

  ngOnInit(): void {
    // Breadcrumb - Organizations
    //this.breadService.changeBreadcrumb([Routing.Organizations], false);

    this.organizationService.removeOrganizationId();

    // organizations
    this.fetchOrganizationList();
  }

}
