import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// model
import { Routing } from 'src/app/_models/routing.enum';
// component
import { ManagementComponent } from './management.component';
import { AdminsComponent } from './admins/admins.component';
import { TeamsComponent } from './teams/teams.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: ManagementComponent, },
  { path: Routing.Teams, component: TeamsComponent, },
  { path: Routing.Admins, component: AdminsComponent, },
  { path: Routing.Users, component: UsersComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ManagementsRoutingModule { }
