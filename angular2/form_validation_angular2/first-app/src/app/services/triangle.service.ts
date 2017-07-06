import {Injectable} from '@angular/core';
import {Perimeter} from './perimeter.service.ts';
@Injectable()
export class Triangle{
	
	constructor(private peri : Perimeter){
		
	}
	
	area(a : number,b : number,c : number){
		let p = this.peri.perim(a,b,c);
		return (p*(p-a)*(p-b)*(p-c));
	}
	
}