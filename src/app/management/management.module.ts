import { NgModule } from '@angular/core';

import { ManagementsRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { AdminsComponent } from './admins/admins.component';
import { TeamsComponent } from './teams/teams.component';
import { UsersComponent } from './users/users.component';

import { ShareModule } from '../_share/share.module';
@NgModule({
  declarations: [
    ManagementComponent,
    AdminsComponent,
    TeamsComponent,
    UsersComponent,
  ],
  imports: [
    ManagementsRoutingModule,
    ShareModule,
  ]
})
export class ManagementModule { }
