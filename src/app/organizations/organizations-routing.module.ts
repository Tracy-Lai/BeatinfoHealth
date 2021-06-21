import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// model
import { Routing } from 'src/app/_models/routing.enum';
// component
import { OrganizationsComponent } from './organizations.component';
import { UsersComponent } from '../users/users.component';

const routes: Routes = [
  // { path: 'detail/:id', component: DetailComponent },
  {
    path: '',
    component: OrganizationsComponent,
  },
  {
    path: Routing.Users,
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class OrganizationsRoutingModule { }
