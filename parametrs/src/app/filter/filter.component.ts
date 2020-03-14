import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
	searchCar = '';
	cars = [
		{name: 'Ford', descr: 'WFM 1'},
		{name: 'Mazda', descr: 'WFM 2'},
		{name: 'Bently', descr: 'WFM 3'},
		{name: 'Audi', descr: 'WFM 4'},
		{name: 'Mercedes', descr: 'WFM 5'},
		{name: 'BMW', descr: 'WFM 6'},
	]

	asyncTitle = Observable.of('Async title 3 seconds').delay(3000); 

	addCar() {
		this.cars.push({
			name: 'NewCar',
			descr: 'WMF'
		});
	}

  constructor() { }

  ngOnInit(): void {
  }

}
