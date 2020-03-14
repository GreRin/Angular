export class CarService {
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
	}
}