import {Pipe,PipeTransform} from '@angular/core';
export class ReversePipe implements PipeTransform{
	transform(data : string){
		
		return data.split('').reverse().join();
	}
}