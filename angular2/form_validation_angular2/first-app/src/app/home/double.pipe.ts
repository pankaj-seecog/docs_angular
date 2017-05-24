import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'double'})
export class DoublePipe implements PipeTransform{
	
	transform(value : number,pow : number){
		return (value*pow);
	}
	
}