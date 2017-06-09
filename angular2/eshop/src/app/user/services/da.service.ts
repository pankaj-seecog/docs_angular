import {Injectable} from '@angular/core';
@Injectable()
export class Da{	
	getDa(bs : number){
		let da = (bs*11)/100;
		return da;
	}
}