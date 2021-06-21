import { NgModule } from '@angular/core';

import { ManagementsRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { AdminsComponent } from './admins/admins.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupDialogComponent } from './groups/group-dialog/group-dialog.component';
import { UsersComponent } from './users/users.component';
import { UserShowComponent } from './users/user-show/user-show.component';
// share
import { ShareModule } from '../_share/share.module';

@NgModule({
  declarations: [
    ManagementComponent,
    UsersComponent,
    UserShowComponent,
    GroupsComponent,
    AdminsComponent,
    // GenderPipe,
    GroupDialogComponent,
  ],
  imports: [
    ManagementsRoutingModule,
    ShareModule,
  ]
})
export class ManagementModule { }
