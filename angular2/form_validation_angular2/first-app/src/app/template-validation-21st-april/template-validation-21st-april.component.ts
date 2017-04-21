import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-validation-21st-april',
  templateUrl: './template-validation-21st-april.component.html',
  styleUrls: ['./template-validation-21st-april.component.css']
})
export class TemplateValidation21stAprilComponent implements OnInit {
   username : string = 'Mohan';
  private password = '1234';
  private email = 'mohan@gmail.com';
  constructor() { }

  ngOnInit() {
  }

}
