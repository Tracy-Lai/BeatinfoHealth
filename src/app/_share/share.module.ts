import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

// icon
import { AccountCircleIconComponent } from './account-circle-icon/account-circle-icon.component';
import { AddIconComponent } from './add-icon/add-icon.component';
import { LogoIconComponent } from './logo-icon/logo-icon.component';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { CloseIconComponent } from './close-icon/close-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { NotificationIconComponent } from './notification-icon/notification-icon.component';
import { IconActiveDirective } from './directives/icon-active.directive';

import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { SpinnerComponent } from './spinner/spinner.component';

// TODO::暫時 icon
import { HeartIconComponent } from './heart-icon/heart-icon.component';
import { ManagementIconComponent } from './management-icon/management-icon.component';

@NgModule({
  declarations: [
    AccountCircleIconComponent,
    AddIconComponent,
    LogoIconComponent,
    HomeIconComponent,
    UserIconComponent,
    CloseIconComponent,
    MenuIconComponent,
    NotificationIconComponent,
    IconActiveDirective,
    HeaderLogoComponent,
    SpinnerComponent,
    HeartIconComponent,
    ManagementIconComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // icons
    AccountCircleIconComponent,
    AddIconComponent,
    LogoIconComponent,
    HomeIconComponent,
    UserIconComponent,
    CloseIconComponent,
    MenuIconComponent,
    NotificationIconComponent,
    IconActiveDirective,
    HeartIconComponent,
    ManagementIconComponent,
    //
    SpinnerComponent,
    // modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // material module
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatMenuModule,
    // pipe
    HeaderLogoComponent,
  ],
})
export class ShareModule { }
