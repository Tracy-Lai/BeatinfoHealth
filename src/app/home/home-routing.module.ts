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
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [OrganizationGuard],
      },
      {
        path: Routing.Management,
        loadChildren: () => import('../management/management.module').then((m) => m.ManagementModule),
        canActivate: [OrganizationGuard],
      },
      {
        path: Routing.Activitys,
        loadChildren: () => import('../activitys/activitys.module').then((m) => m.ActivitysModule),
        canActivate: [OrganizationGuard],
      },
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
