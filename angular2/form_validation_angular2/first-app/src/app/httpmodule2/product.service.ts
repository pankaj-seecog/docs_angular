import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
@Injectable()
export class ProductService{
	
	constructor(private http : Http){
		
	}
	
	addProduct(product : any){
		return this.http.post('https://ecommerse-cf4aa.firebaseio.com/products.json',product);
	}
	
	getProducts(){
		return this.http.get('https://ecommerse-cf4aa.firebaseio.com/products.json').map(
		(res : Response)=>{
			const data = res.json();
			return data;
		}
		)
	}
	
}