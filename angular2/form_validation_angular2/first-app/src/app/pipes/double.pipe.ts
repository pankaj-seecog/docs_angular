import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'double'})
export class Double implements PipeTransform{
	
	transform(n : number){
		return (n*2);
	}
	
}