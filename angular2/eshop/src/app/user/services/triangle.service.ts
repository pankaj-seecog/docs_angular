import {Injectable} from '@angular/core';
import {Perimeter} from './perimeter.service';
@Injectable()
export class TriangleService{
	
	constructor(private perimeter : Perimeter){
		
	}
	
	area(a:number,b:number,c:number){
		let p = this.perimeter.peri(a,b,c);
		let ar = Math.sqrt(p*(p-a)*(p-b)*(p-c));
		return ar;
	}
	
	
}