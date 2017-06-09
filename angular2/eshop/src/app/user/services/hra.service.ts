import {Injectable} from '@angular/core';
@Injectable()
export class Hra{
	
	getHra(bs : number){
		let hra = (bs*30)/100;
		return hra;
	}
	
}