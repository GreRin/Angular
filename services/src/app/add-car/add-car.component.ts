import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html'
})
export class AddCarComponent {

	@Output('onAddCar') carEmitter = new EventEmitter<string>();
	carName = '';
	addCar() {
		// to-do action
		this.carEmitter.emit(this.carName);
		this.carName = '';
	}
}
