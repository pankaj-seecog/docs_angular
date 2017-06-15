import {Directive,ElementRef,Renderer} from '@angular/core';
@Directive({selector : '[myHide]'})
export class MyHide {
	
	constructor(el : ElementRef, render : Renderer){
		render.setElementStyle(el.nativeElement,'display','block');
	}
	
}