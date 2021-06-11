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
        path: Routing.Orginazation,
        loadChildren: () => import('../orginazations/orginazations.module').then((m) => m.OrginazationsModule),
      },
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [OrginazationGuard],
      },
      {
        path: Routing.User,
        loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
        canActivate: [OrginazationGuard],
      },
    ],
  },
  // otherwise redirect to Orginazation
  {
    path: '**',
    redirectTo: Routing.Orginazation
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule { }
