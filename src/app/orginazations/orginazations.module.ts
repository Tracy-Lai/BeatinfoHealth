import { NgModule } from '@angular/core';

import { OrginazationsRoutingModule } from './orginazations-routing.module';
import { OrginazationsComponent } from './orginazations.component';

import { ShareModule } from '../_share/share.module';

@NgModule({
  declarations: [
    OrginazationsComponent,
  ],
  imports: [
    OrginazationsRoutingModule,
    ShareModule,
  ]
})
export class OrginazationsModule { }
