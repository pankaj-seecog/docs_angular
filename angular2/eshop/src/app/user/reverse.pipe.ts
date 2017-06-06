import {Pipe,PipeTransform} from '@angular/core';
Pipe({name : 'reverse'})
export class ReversePipe implements PipeTransform{
	transform(data : string){
		
		return data.split('').reverse().join('');
	}
}