import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// model
import { Organization } from '../../_models/organization';
// service
import { OrganizationService } from './../../_services/organization.service';

export interface DialogData {
  // filterOrganizations: Organization[];
  filterOrganizationId: number;
}

@Component({
  selector: 'app-organization-dialog',
  templateUrl: './organization-dialog.component.html',
  styleUrls: ['./organization-dialog.component.scss']
})
export class OrganizationDialogComponent implements OnInit {

  filterOrganizations: Organization[] = [];

  constructor(
    private organizationService: OrganizationService,
    public dialogRef: MatDialogRef<OrganizationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  // 取得 組織
  fetchOrganizationList() {
    this.organizationService.fetchOrganization('1').subscribe(res => {
      this.filterOrganizations = res;
    });
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('450px');
    this.fetchOrganizationList();
  }

}
