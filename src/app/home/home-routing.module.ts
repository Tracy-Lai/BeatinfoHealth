import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routing } from 'src/app/models/routing.enum';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      // {
      //   path: Routing.Team,
      //   loadChildren: () =>
      //     import('../teams/teams.module').then((m) => m.TeamsModule),
      // },
      {
        path: Routing.User,
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
      // {
      //   path: Routing.Setting,
      //   loadChildren: () =>
      //     import('../setting/setting.module').then((m) => m.SettingModule),
      // },
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('../dashboard/dashboard.module').then(
      //       (m) => m.DashboardModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule {}
