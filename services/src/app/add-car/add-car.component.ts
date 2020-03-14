import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-add-car',
	templateUrl: './add-car.component.html'
})

export class AddCarComponent {
	carName = '';

	constructor(private service: CarService) {}

	addCar() {
		// to-do action
		this.service.onAddCar(this.carName);
		this.carName = '';
	}
}
