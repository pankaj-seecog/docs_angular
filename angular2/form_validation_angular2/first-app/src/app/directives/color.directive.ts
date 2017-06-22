import {Directive,HostListener,HostBinding} from '@angular/core';
@Directive({selector : '[myColor]'})
export class MyColor{
	
	private col : string = 'pink';
	@HostListener('mouseover') mouseOver(){
		console.log('mouse over')
		this.col = 'red';		
	}
	@HostListener('mouseout') mouseOut(){
		console.log('mouse out')
		this.col = 'green';
	}
	@HostBinding('style.color') get color(){
		return this.col;		
	}	
}