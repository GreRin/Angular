import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import * as firebase from 'firebase';

import { WindowService } from './common/window/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

	email: string;
	password: string;
	signInMode: boolean = false;
	phoneNumber: string;
	otp: string;
	phoneSignIn: boolean = true;
	windowRef: any;
	disableOTPSendButton: boolean = true;

	constructor(
		public afAuth: AngularFireAuth,
		private windowService: WindowService
	) {}

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
  }

  ngAfterViewInit() {
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
        this.disableOTPSendButton = false;
      }
    });
    this.windowRef.recaptchaVerifier.render();
  }

  sendOTP() {
    this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber, this.windowRef.recaptchaVerifier).then((confirmationResult) => {
      this.windowRef.confirmationResult = confirmationResult;
    });
  }

  verifyOTP() {
    this.windowRef.confirmationResult.confirm(this.otp)
      .then((userCredentials) => console.log(userCredentials));
  }

	googleSignInViaPopup() {
		this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
			.then((userCredentials) => console.log(userCredentials));
	}

	googleSignInViaRedirect() {
		this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
			.then((userCredentials) => console.log(userCredentials));
	}

	facebookSignInViaPopup() {
		this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
			.then((userCredentials) => console.log(userCredentials));
	}

	facebookSignInViaRedirect() {
		this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider())
			.then((userCredentials) => console.log(userCredentials));
	}

	githubSignInViaPopup() {
		this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
			.then((userCredentials) => console.log(userCredentials));
	}

	githubSignInViaRedirect() {
		this.afAuth.auth.signInWithRedirect(new auth.GithubAuthProvider())
			.then((userCredentials) => console.log(userCredentials));
	}

	signIn() {
		this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
			.then((userCredentials) => console.log(userCredentials));
	}

	signUp() {
		this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
			.then((userCredentials) => console.log(userCredentials));
	}

	logout() {
		this.afAuth.auth.signOut();
	}

	signInOrSignUp() {
		this.signInMode ? this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
										: this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
	}

	toggleSignInMode() {
		this.signInMode = !this.signInMode;
	}

	togglePhoneSignIn() {
		this.phoneSignIn = !this.phoneSignIn;
	}
}
