import {Injectable} from '@angular/core';
import {Hra} from './hra.service';
import {Da} from './da.service';
@Injectable()
export class SalaryService{
	
	constructor(private daService : Da,private hraService : Hra){
		
	}
	
	grossSalary(bs){
		let hra = this.hraService.getHra(bs);
		let da = this.daService.getDa(bs);
		let gross = bs+hra+da;
		return gross;
	}
	
}