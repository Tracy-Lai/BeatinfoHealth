import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';

import { ShareModule } from 'src/app/share/share.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    UsersRoutingModule,
    ShareModule,
  ]
})
export class UsersModule { }
