import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { WindowService } from './common/window/window.service';
import { AuthService } from './common/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	phoneSignIn: boolean = true;
	windowRef: any;

	constructor(
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		private windowService: WindowService
	) {}

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
  }

	// googleSignInViaPopup() {
	// 	this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
	// 		.then((userCredentials) => console.log(userCredentials));
	// }

	// googleSignInViaRedirect() {
	// 	this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
	// 		.then((userCredentials) => console.log(userCredentials));
	// }

	// facebookSignInViaPopup() {
	// 	this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
	// 		.then((userCredentials) => console.log(userCredentials));
	// }

	// facebookSignInViaRedirect() {
	// 	this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider())
	// 		.then((userCredentials) => console.log(userCredentials));
	// }

	// githubSignInViaPopup() {
	// 	this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
	// 		.then((userCredentials) => console.log(userCredentials));
	// }

	// githubSignInViaRedirect() {
	// 	this.afAuth.auth.signInWithRedirect(new auth.GithubAuthProvider())
	// 		.then((userCredentials) => console.log(userCredentials));
	// }

	// signIn() {
	// 	this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
	// 		.then((userCredentials) => console.log(userCredentials));
	// }

	// signUp() {
	// 	this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
	// 		.then((userCredentials) => console.log(userCredentials));
	// }
}
