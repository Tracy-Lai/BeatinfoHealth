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

      user.getIdToken().then(token => {
        this.loginService.setToken(token);
      });

      this.router.navigate(['/']);
      /*
      TODO:: wait for login api
      this.loginService.login(user.uid).subscribe(p => {
        this.router.navigate(['/']);
      });
      */
    }
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
  }

  ngOnInit(): void {
  }

}
