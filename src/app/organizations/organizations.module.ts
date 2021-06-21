import { NgModule } from '@angular/core';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationDialogComponent } from './organization-dialog/organization-dialog.component';
import { UsersComponent } from '../users/users.component';
import { UsersDetailDialogComponent } from '../users/users-detail-dialog/users-detail-dialog.component';

import { ShareModule } from '../_share/share.module';

@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationDialogComponent,
    UsersComponent,
    UsersDetailDialogComponent,
  ],
  imports: [
    OrganizationsRoutingModule,
    ShareModule,
  ]
})
export class OrganizationsModule { }
