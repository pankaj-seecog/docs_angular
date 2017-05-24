import {Pipe,PipeTransform} from '@angular/core';
export class PankajPipe implements PipeTransform{
	
	transform(products : any,filterString:string){
		
		if(products.length===0){
			return products;
		}
		const productsArray = [];
		for(const product of products){
			
			if(product.status === filterString){
				productsArray.push(product);
			}
		}
		return productsArray;
	}
}