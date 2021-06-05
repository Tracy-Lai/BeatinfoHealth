import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// material
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

import { LogoIconComponent } from './logo-icon/logo-icon.component';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { IconActiveDirective } from './directives/icon-active.directive';

import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    LogoIconComponent,
    HomeIconComponent,
    UserIconComponent,
    IconActiveDirective,
    HeaderLogoComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // icons
    LogoIconComponent,
    HomeIconComponent,
    UserIconComponent,
    IconActiveDirective,
    //
    SpinnerComponent,
    // modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // material module
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatNativeDateModule,
    MatMenuModule,
    // pipe
    HeaderLogoComponent,
  ],
})
export class ShareModule { }
