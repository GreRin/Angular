import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';

interface Cars {
	name: string;
	color: string;
	id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	cars: Cars[] = [];
	carName: string = '';
	
	constructor(private carsService: CarsService) {}

	ngOnInit() {
		this.carsService
		.getCars()
		.subscribe(data => this.cars = data["cars"]);
	}

	loadCars() {
		this.carsService
		.getCars()
		.subscribe((cars: Cars[]) => this.cars = cars);
	};

	addCar() {
		this.carsService
		.addCar(this.carName)
		.subscribe((data: Cars[]) => console.log(data));
		this.carName = '';
	}
};