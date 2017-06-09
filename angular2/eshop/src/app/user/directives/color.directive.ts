import {Directive,HostListener,HostBinding} from '@angular/core';
@Directive({selector : '[mycolor]'})
export class ColorDirective{
	private color : string='red';
	@HostListener('mouseover') mouseover(){
		console.log('Mouse over');
		this.color = 'blue';
	}
	
	@HostListener('mouseout') mouseout(){
		console.log('Mouse out')
		this.color = 'green';
	}
	
	@HostBinding('style.color') get init(){		
		return this.color;
	}
}