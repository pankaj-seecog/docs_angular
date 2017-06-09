import {Directive,HostListener,HostBinding} from '@angular/core';
@Directive({selector : '[myDir]'})

export class MyDirective{
	constructor() { }
	@HostBinding('style.background-color') backgroundColor : string;	
	@HostListener('mouseover') onHover(){
		this.backgroundColor = 'red';
			}
	
	@HostListener('mouseout') onLeave(){
		this.backgroundColor = 'green';
	}
}