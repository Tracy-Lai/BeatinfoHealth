import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ShareModule } from 'src/app/_share/share.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    HomeComponent,
    BreadcrumbComponent,
  ],
  imports: [
    HomeRoutingModule,
    ShareModule,
  ]
})

export class HomeModule { }
