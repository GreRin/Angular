import { ConsoleService } from './console.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CarService {

	constructor(private consoleService: ConsoleService) {}

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
	}];

	onAddCar(carName: string) {
		this.cars.push({ isSold: false, name: carName });
		this.consoleService.log(`Car ${carName} was added!`);
	}
}