import {Directive,Renderer,ElementRef,HostListener} from '@angular/core';
@Directive({selector : '[BoldCharacter]'})
export class MyBoldDirective {
	
	constructor(private ele : ElementRef,private render : Renderer){
		
	}
	
	@HostListener('mouseover') mouseOver(){
		this.render.setElementStyle(this.ele.nativeElement,'fontWeight','bold');
	}
	
	@HostListener('mouseout') mouseout(){
	   this.render.setElementStyle(this.ele.nativeElement,'fontWeight','normal')
	}	
	
}