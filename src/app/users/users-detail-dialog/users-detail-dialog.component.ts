import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-users-detail-dialog',
  templateUrl: './users-detail-dialog.component.html',
  styleUrls: ['./users-detail-dialog.component.scss']
})
export class UsersDetailDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  onCancel() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
