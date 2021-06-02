import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatSortModule } from '@angular/material/sort';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatMenuModule } from '@angular/material/menu';

import { LogoIconComponent } from './logo-icon/logo-icon.component';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { IconActiveDirective } from './directives/icon-active.directive';

import { HeaderLogoComponent } from './header-logo/header-logo.component';

@NgModule({
  declarations: [
    LogoIconComponent,
    HomeIconComponent,
    IconActiveDirective,
    HeaderLogoComponent
  ],
  imports: [
  ],
  exports: [
    // icons
    LogoIconComponent,
    HomeIconComponent,
    IconActiveDirective,
    // modules
    // material module
    // pipe
    HeaderLogoComponent,
  ],
})
export class ShareModule { }
