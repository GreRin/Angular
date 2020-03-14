import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'searchCar',
	pure: false
})
export class SearchCarPipe implements PipeTransform {

  transform(carList, searchStr: string) {
    if (carList.length === 0 || searchStr === '') {
			return carList;
		}
		return carList.filter(car => car.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }
}
