import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class CarsService {
	constructor(private http: HttpClient) {}

	getAppTitle() {
		return this.http
		.get('http://localhost:3000/title')
		.map(data => {
			return data.value
		})
	}

	getCars() {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json; charset=utf8'
		})
		return this.http
		.get('http://localhost:3000/cars', {
			headers: headers
		})
		.map(data => {
			return data
		})
		.catch((error: HttpErrorResponse) => {
			return Observable.throw("Something goes wrong...");
		});
	}

	addCar(carName: string) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json; charset=utf8'
		})
		const data = {
			name: carName,
			color: 'blue'
		}
		return this.http.post('http://localhost:3000/cars', data, {headers: headers})
		.map(data => {
			return data
		});
	}

	changeColor(car: any, color: string) {
		car.color = color;
		return this.http.put(`http://localhost:3000/cars/${car.id}`, {color})
		.map(data => {
			return data
		});
	}

	deleteCar(car: any) {
		return this.http.delete(`http://localhost:3000/cars/${car.id}`)
		.map(data => {
			return data
		});
	}
}