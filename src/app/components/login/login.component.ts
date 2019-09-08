import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../modules/authentication/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  signInWithGoogle(): void {
    this.authenticationService.googleLogin()
      .then(() => this.afterSignIn());
  }

  private afterSignIn(): void {
    this.router.navigate(['/']);
  }
}
