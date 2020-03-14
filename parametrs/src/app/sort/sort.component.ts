import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
	headerText = 'Create your directive!'
  constructor() { }

  ngOnInit(): void {
	}
	
	items = [1, 2, 3, 4, 5];
	current = 1;

	onclickItem(number: number){
		this.current = number;
	}

}
