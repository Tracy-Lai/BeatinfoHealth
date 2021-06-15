import { OrganizationsModule } from './../organizations/organizations.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// guard
import { OrganizationGuard } from '../_helpers/organization.guard';
// model
import { Routing } from 'src/app/_models/routing.enum';
// component
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: Routing.Organizations,
        loadChildren: () => import('../organizations/organizations.module').then((m) => m.OrganizationsModule),
      },
      {
        path: Routing.Management,
        loadChildren: () => import('../management/management.module').then((m) => m.ManagementModule),
        canActivate: [OrganizationGuard],
      },
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [OrganizationGuard],
      },
      // {
      //   path: Routing.Users,
      //   loadChildren: () => import('../management/users/users.module').then((m) => m.UsersModule),
      //   canActivate: [OrganizationGuard],
      // },
    ],
  },
  // otherwise redirect to Organizations
  {
    path: '**',
    redirectTo: Routing.Organizations
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule { }
