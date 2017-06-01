import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
private signUp : FormGroup;
  constructor(public navCtrl: NavController) {
this.signUp = new FormGroup({
first_name : new FormControl(null)

});
  }

}
