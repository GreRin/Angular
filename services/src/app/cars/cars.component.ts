import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent {

	cars = [{
		name: 'Ford',
		isSold: false
	}, {
		name: 'Mazda',
		isSold: true
	}, {
		name: 'Audi',
		isSold: false
	}, {
		name: 'Ferrary',
		isSold: false
	}]
	
	updateCarList(carName: string) {
		this.cars.push({
			name: carName,
			isSold: false
		});
	}
}
