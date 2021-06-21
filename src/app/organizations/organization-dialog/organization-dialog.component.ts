import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// model
import { Organization, OrganizationDialog } from '../../_models/organization';
// service
import { OrganizationService } from '../../_services/organization.service';
import { SnackbarService } from '../../_services/snackbar.service';

@Component({
  selector: 'app-organization-dialog',
  templateUrl: './organization-dialog.component.html',
  styleUrls: ['./organization-dialog.component.scss']
})
export class OrganizationDialogComponent implements OnInit {

  form = this.fb.group({
    Name: ['', Validators.required],
  });

  get submitable() {
    return this.form.status === 'VALID';
  }

  get isCreate() {
    return !this.data;
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OrganizationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Organization,
    private organizationService: OrganizationService,
    private snackbarService: SnackbarService,
  ) { }

  onSubmit() {
    const apiFunc = this.data ?
      this.organizationService.updateOrganization(this.data.Id, this.form.value) : this.organizationService.createOrganization(this.form.value);
    apiFunc.subscribe(res => {
      // snackbar
      this.data ? this.snackbarService.update(res.StatusCode) : this.snackbarService.create(res.StatusCode);
      this.dialogRef.close(true);
    });
  }

  ngOnInit(): void {

    this.dialogRef.updateSize('450px');

    if (!this.data) {
      return;
    }

    this.form.setValue({
      Name: this.data.Name,
    });
  }

}
