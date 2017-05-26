import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'datapipe',pure : false})
export class KeyPipe implements PipeTransform{
	
	transform(value : any[],filterKey : string){
		if(value.length==0){
			return value;
		}
		const products = [];
		for(const x of value){
			console.log(x.status +'--'+filterKey)
			if(x.status==filterKey){
				products.push(x)
			}
		}
		return products;
	}
	
}