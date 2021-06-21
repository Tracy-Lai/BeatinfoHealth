import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// model
import { Group } from '../../../_models/group';

interface GroupDialog {
  Name: string;
}

@Component({
  selector: 'app-group-dialog',
  templateUrl: './group-dialog.component.html',
  styleUrls: ['./group-dialog.component.scss']
})
export class GroupDialogComponent implements OnInit {

  form = this.fb.group({
    name: ['', Validators.required],
  });
  get submitable() {
    return this.form.status === 'VALID';
  }

  get isCreate() {
    return !this.data;
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GroupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Group
  ) { }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    const apiFunc = this.data ? 'update' : 'create';
    // apiFunc.subscribe(p => {
    //   this.dialogRef.close(true);
    // });
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
    if (!this.data) {
      return;
    }

    this.form.setValue({
      name: this.data.Name,
    });
  }

}
