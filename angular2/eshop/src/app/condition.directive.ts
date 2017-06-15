import {Directive,TemplateRef,ViewComponentRef} from '@angular/core';
@Directive({selector : '[myIf]'})
export class MyIf{
	
	constructor(private template : TemplateRef<any>,private viewComponent : ViewComponentRef){
		
	}
	
	@Input('myIf') set condition(x : boolean){
		if(x){
			this.viewComponent.createEmbeddedView(template);
		}
		else{
			this.viewComponent.clear();
		}
	}
	
	
}