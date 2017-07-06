import {Component,OnInit} from '@angular/core';
import {NavParams,NavController} from 'ionic-angular';
@Component({
	selector : 'page-user',
	templateUrl : 'user.html'
})

export class UserPage implements OnInit{
	private name : string;
	constructor(private navPara : NavParams,private navCtrl : NavController){		
		
	}
	
	ngOnInit(){
	this.name = this.navPara.data.name;		
	}
	
	back(){
		this.navCtrl.pop();
	}
}
