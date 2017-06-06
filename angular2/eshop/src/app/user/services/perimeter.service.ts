import {Injectable} from '@angular/core';
@Injectable()
export class Perimeter
{
	peri(a:number,b:number,c:number){
		return (a+b+c)/2.0;
	}
	
}