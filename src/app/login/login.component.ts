import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: AuthService,
    private router: Router,
  ) {
    this.loginService.logout();
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    var user = signInSuccessData.authResult.user;
    if (user) {
      var uid = user.uid;
      user.getIdToken().then(token => {
        this.loginService.login(token).subscribe(res => {
          localStorage.setItem('access_token', res.Data.access_token);
          localStorage.setItem('refresh_token', res.Data.refresh_token);
          this.router.navigate(['/organizations']);
        });
      });
    }
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
  }

  ngOnInit(): void {
  }

}
