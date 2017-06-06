import {Injectable} from '@angular/core';
@Injectable()
export class CalculatorService
{
	
	mul(t1:number,t2:number){
		return (t1*t2)
	}
	
	add(a:number,b:number){
		return (a+b);
	}
	
	
	
}