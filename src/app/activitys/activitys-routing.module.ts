import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// model
import { Routing } from 'src/app/_models/routing.enum';
// component
import { ActivitysComponent } from './activitys.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitysComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ActivitysRoutingModule { }
