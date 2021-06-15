import { NgModule } from '@angular/core';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';

import { ShareModule } from '../_share/share.module';

@NgModule({
  declarations: [
    OrganizationsComponent,
  ],
  imports: [
    OrganizationsRoutingModule,
    ShareModule,
  ]
})
export class OrganizationsModule { }
