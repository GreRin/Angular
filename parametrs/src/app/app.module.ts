import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { SortComponent } from './sort/sort.component';
import { BackgroundDirective } from './directives/background.directive';
import { PowPipe } from './pipe/pow.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { FilterComponent } from './filter/filter.component';
import { SearchCarPipe } from './filter/search-car.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    AddCarComponent,
		SortComponent,
		BackgroundDirective,
		PipeComponent,
		PowPipe,
		FilterComponent,
		SearchCarPipe
  ],
  imports: [
		BrowserModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
