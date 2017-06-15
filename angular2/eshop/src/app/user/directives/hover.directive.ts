import {Directive,HostListener,ElementRef,Renderer} from '@angular/core';
@Directive({selector : '[myHover]'})
export class MyHover{
	
	constructor(private el : ElementRef,private rend : Renderer){
	}
	
	@HostListener('mouseover') mouseOver(){
		console.log('Mouse over')
		this.change(true)
	}
	
	@HostListener('mouseout') mouseOut(){
		console.log('mouse out')
		this.change(false)
	}
	
	change(stt : boolean){
		if(stt)
		{
			console.log('inside if')
		this.rend.setElementStyle(this.el.nativeElement,'text-decoration','underline')
		}
		else{
			console.log('inside else')
			this.rend.setElementStyle(this.el.nativeElement,'text-decoration','none')
		}
	}	
}