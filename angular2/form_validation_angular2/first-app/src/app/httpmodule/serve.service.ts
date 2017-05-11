import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class ServerService 
{
	
	constructor(private http : Http){
		
	}
	
	addRecord(data : any){
		console.log(data)
		return this.http.post('https://ecommerse-cf4aa.firebaseio.com/data.json',data);
	}
	
	getRecord(){
		
		return this.http.get('https://ecommerse-cf4aa.firebaseio.com/data.json');
	}
	
	getAllRecord(){
		//We are using the map operator here
		return this.http.get('https://ecommerse-cf4aa.firebaseio.com/data.json').map(
		(res : Response)=>{
			const data = res.json();
			return data;
		}
		);
	}
}