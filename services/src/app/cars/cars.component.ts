import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})

export class CarsComponent implements OnInit {

	cars = [];

	constructor(private service: CarService) {}

	ngOnInit() {
		this.cars = this.service.cars;
	}
}
