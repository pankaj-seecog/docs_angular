import {Directive,HostBinding,HostListener} from '@angular/core';
@Directive({selector : '[background]'})
export class Background{
	private color : string;
	@HostListener('mouseover') mouseOver(){
		
		console.log('Mouse is over')
		this.color = 'red';
	}
	
	@HostListener('mouseout') mouseOut(){
		console.log('Mouse is out');
		this.color = 'green';
	}
	
	@HostBinding('style.color') get getColor(){
		return this.color;
	} 
}