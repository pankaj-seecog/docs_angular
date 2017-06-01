export class DataService{
	
	getData(){
		
		var dataProvise = new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve('data');
			},2000);
		})
		return dataProvise;
	}
	
}