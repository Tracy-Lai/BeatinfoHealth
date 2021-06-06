import { NgModule } from '@angular/core';

import { ShareModule } from '../_share/share.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    ShareModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
