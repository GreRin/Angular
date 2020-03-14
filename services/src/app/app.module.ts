import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarService } from './car.service';
import { ConsoleService } from './console.service';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
		AddCarComponent,
  ],
  imports: [
		BrowserModule,
		FormsModule
  ],
  providers: [CarService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
