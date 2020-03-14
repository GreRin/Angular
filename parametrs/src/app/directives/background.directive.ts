import { Directive, 
	ElementRef, 
	OnInit, 
	Renderer2, 
	HostListener, 
	HostBinding, 
	Input} 
	from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {
	@Input('appBackground') hoverColor: string = 'green';
	@Input('appBackground') defaultColor: string = 'transparent';
	@HostBinding('style.backgroundColor') background:string;

	// constructor(private element: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		this.background = this.defaultColor;
	}

	@HostListener('mouseenter') mouseEnter() {
		// const {nativeElement} = this.element;
		// this.renderer.setStyle(nativeElement, 'background-color', 'green');
		// this.renderer.addClass(nativeElement, 'white-text');
		this.background = this.hoverColor;
	}

	@HostListener('mouseleave') mouseLeave() {
		// const {nativeElement} = this.element;
		// this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
		// this.renderer.addClass(nativeElement, 'white-text');
		this.background = this.defaultColor;
	}
}
