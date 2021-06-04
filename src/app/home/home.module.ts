import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ShareModule } from 'src/app/share/share.module';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BreadcrumbComponent,
  ],
  imports: [
    HomeRoutingModule,
    ShareModule,
  ]
})

export class HomeModule { }
