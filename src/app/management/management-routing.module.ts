import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// model
import { Routing } from 'src/app/_models/routing.enum';
// component
import { ManagementComponent } from './management.component';
import { AdminsComponent } from './admins/admins.component';
import { UsersComponent } from './users/users.component';
import { UserShowComponent } from './users/user-show/user-show.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      {
        path: Routing.Admins,
        component: AdminsComponent,
      },
      {
        path: Routing.Groups,
        component: GroupsComponent,
      },
      {
        path: Routing.Users,
        component: UsersComponent,
      },
      {
        path: Routing.User_Show,
        component: UserShowComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ManagementRoutingModule { }
