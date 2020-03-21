import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';
import { WindowService } from './common/window/window.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		BrowserModule,
		AppFirebaseModule,
		FormsModule
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
