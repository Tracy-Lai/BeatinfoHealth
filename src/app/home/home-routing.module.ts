import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// guard
import { OrginazationGuard } from './../_helpers/orginazation.guard';
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
        path: Routing.Orginazations,
        loadChildren: () => import('../orginazations/orginazations.module').then((m) => m.OrginazationsModule),
      },
      {
        path: Routing.Management,
        loadChildren: () => import('../management/management.module').then((m) => m.ManagementModule),
        canActivate: [OrginazationGuard],
      },
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [OrginazationGuard],
      },
      // {
      //   path: Routing.Users,
      //   loadChildren: () => import('../management/users/users.module').then((m) => m.UsersModule),
      //   canActivate: [OrginazationGuard],
      // },
    ],
  },
  // otherwise redirect to Orginazation
  {
    path: '**',
    redirectTo: Routing.Orginazations
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule { }
