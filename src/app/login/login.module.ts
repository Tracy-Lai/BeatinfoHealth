import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseUIModule } from 'firebaseui-angular';

import { ShareModule } from '../_share/share.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShareModule,
    LoginRoutingModule,
    FirebaseUIModule.forFeature({}),
  ]
})
export class LoginModule { }
