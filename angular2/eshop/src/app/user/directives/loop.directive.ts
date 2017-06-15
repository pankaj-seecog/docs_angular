import {Directive,TemplateRef,ViewContainerRef,Input} from '@angular/core';
@Directive({selector : '[myLoop]'})
export class LoopDirective {
	
	constructor(private templateRef : TemplateRef<any>,private viewContainerRef : ViewContainerRef){
		
	}
	
	@Input('myLoop') set loop(num : number){
		for(let i=0;i<num;i++){
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		}
	}
	
}