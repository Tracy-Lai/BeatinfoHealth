import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  // },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // canActivate: [AuthGuard],
    // resolve: {
    //   data: AuthResolver,
    // },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
