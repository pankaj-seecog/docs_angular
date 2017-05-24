import {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
@Pipe({name : 'smd'})
export class ShortenPipe implements PipeTransform
{
	transform(value : any){
		return value.substring(0,10);
		
	}
	
}
