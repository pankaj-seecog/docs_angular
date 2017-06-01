import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {CalculatorService} from './calculator.service';
import {DataService} from './data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [UserService,CalculatorService,DataService]
})
export class UserComponent implements OnInit {
public user : {name : string};
public sum : number = 0;
public sRecord : string = '';
  constructor(private userService : UserService,private calculatorService : CalculatorService,private dataService : DataService) { }

  ngOnInit() {
	  this.user = this.userService.user;
	  this.sum = this.calculatorService.add(2,2);
	  this.sRecord = this.dataService.getData().then(data=>this.sRecord = data);
  }

}
