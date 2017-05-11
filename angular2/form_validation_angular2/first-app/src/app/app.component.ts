import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styles : [``]
})
export class AppComponent {
  firstName = 'Mohan';
  lastName = 'Kumar';
  age = 21;
  showThis(record : string){
	  alert('The value is '+record)
  }
  secondShow(data:string){
	  alert('The data is '+data)
  }
}
