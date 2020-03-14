import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	}
	
	name = 'WebForMyself';
	pi = Math.PI;
	money = 350;
	date = new Date();
	amount = 0.45;
	object = {
		foo: 'bar',
		baz: 'qux',
		nested: {
			xyz: 3,
			numbers: [1,2,3]
		}
	}

}
