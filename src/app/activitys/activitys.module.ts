import { NgModule } from '@angular/core';

import { ActivitysRoutingModule } from './activitys-routing.module';
import { ActivitysComponent } from './activitys.component';

// share
import { ShareModule } from '../_share/share.module';

@NgModule({
  declarations: [
    ActivitysComponent
  ],
  imports: [
    ActivitysRoutingModule,
    ShareModule,
  ]
})
export class ActivitysModule { }
