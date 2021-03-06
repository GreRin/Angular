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
	colors = [
		'red',
		'white',
		'blue',
		'green',
		'yellow',
		'gray'
	]

	cars: Cars[] = [];
	carName: string = '';
	appTitle;
	
	constructor(private carsService: CarsService) {}

	ngOnInit() {
		this.appTitle = this.carsService.getAppTitle();
	}

	loadCars() {
		this.carsService
		.getCars()
		.subscribe((cars: Cars[]) => {
			this.cars = cars
		},
		(error) => {
			alert(error);
		});
	};

	addCar() {
		this.carsService
		.addCar(this.carName)
		.subscribe((car: Cars) => this.cars.push(car));
		this.carName = '';
	}

	getRandomColor() {
		const num = Math.round(Math.random() * (this.colors.length - 1));
		return this.colors[num];
	}

	setNewColor(car: Cars) {
		this.carsService.changeColor(car, this.getRandomColor())
		.subscribe(car => console.log(car))
	}

	deleteCar(car: Cars) {
		this.carsService.deleteCar(car)
		.subscribe(data => {
			this.cars = this.cars.filter(c => c.id !== car.id)
		})
	}
};