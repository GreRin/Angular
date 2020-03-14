import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
	carName = "";
	carYear = 2017;

	@Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();

  constructor() { }

  ngOnInit(): void {
  }
	
	addCar() {
		// to-do action
		this.carEmitter.emit({
			name: this.carName,
			year: this.carYear
		})

		this.carName = '';
		this.carYear = 2017;
	}
}
