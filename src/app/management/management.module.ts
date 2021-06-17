import { NgModule } from '@angular/core';

import { ManagementsRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { AdminsComponent } from './admins/admins.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { UserShowComponent } from './users/user-show/user-show.component';
// share
import { ShareModule } from '../_share/share.module';
// pipe
import { GenderPipe } from '../_pipe/gender.pipe';

@NgModule({
  declarations: [
    ManagementComponent,
    UsersComponent,
    UserShowComponent,
    GroupsComponent,
    AdminsComponent,
    GenderPipe,
  ],
  imports: [
    ManagementsRoutingModule,
    ShareModule,
  ]
})
export class ManagementModule { }
