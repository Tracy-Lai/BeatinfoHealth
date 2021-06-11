import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// model
import { Routing } from 'src/app/_models/routing.enum';
// component
import { OrginazationsComponent } from './orginazations.component';

const routes: Routes = [
  // { path: 'detail/:id', component: DetailComponent },
  {
    path: '',
    component: OrginazationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class OrginazationsRoutingModule { }
