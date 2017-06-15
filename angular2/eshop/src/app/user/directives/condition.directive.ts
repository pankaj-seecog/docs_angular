import {Directive,TemplateRef,ViewContainerRef,Input} from '@angular/core';
@Directive({selector : '[myIf]'})
export class MyCondition{
	
	constructor(private template : TemplateRef<any>,private viewComponent : ViewContainerRef){
		
	}
	
	@Input('myIf') set condition(x : boolean){
		if(x){
			this.viewComponent.createEmbeddedView(this.template);
		}
		else{
			this.viewComponent.clear();
		}
	}
	
	
}