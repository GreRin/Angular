import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/common/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.component.html',
  styleUrls: ['./login-options.component.css']
})
export class LoginOptionsComponent implements OnInit {

	providers = environment.providers;
	modes = environment.modes;

  constructor(
		public authService: AuthService,
	) { }

  ngOnInit(): void {
	}
	
	signInWithModeAndProvider(mode: string, provider: string) {
		this.authService.signIn(mode, provider);
	}

	toggleSignInMode() {
		this.authService.signInMode = !this.authService.signInMode
	}

	
	togglePhoneSignIn() {
		this.authService.phoneSignIn = !this.authService.phoneSignIn
	}

}
