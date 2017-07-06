/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GrossComponent } from './gross.component';
import {MyColor} from '../directives/color.directive';
import {Calculator} from '../services/calculator.service';
import {Triangle} from '../services/triangle.service';
import {Perimeter} from '../services/perimeter.service';
import {Double} from '../pipes/double.pipe';
import {Background} from '../directives/background.directive';
describe('GrossComponent', () => {
  let component: GrossComponent;
  let fixture: ComponentFixture<GrossComponent>;
  let tt : Triangle;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossComponent,MyColor ]
    })
    .compileComponents();
  }));

  beforeEach(()=>{
	  TestBed.configureTestingModule({
	  providers : [Perimeter,Triangle]
	  });
  });
  
  /*beforeEach(inject([Triangle],(tri : Triangle)=>{
	  tt = tri;
  }));*/
  
  //Now inject the services/calculator
  
  
  
  beforeEach(() => {
    fixture = TestBed.createComponent(GrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
  it('Test for the mouserover event',()=>{
	  var ele = fixture.debugElement.query(By.css('span'))
	  ele.triggerEventHandler('mouseover',null);
	  fixture.detectChanges();
	  expect(ele.nativeElement.style.color).toBe('red')
  });
  
  it('Test for backgroundcolor',()=>{
	 let ele = fixture.debugElement.query(By.css('span')); 
	 ele.triggerEventHandler('mouseover',null);
	  expect(ele.nativeElement.style.color).toBe('red')
  });
  
  it('Test for the service for calculator',()=>{
	  let calc = new Calculator();
	  expect(calc.add(2,2)).toEqual(4);
	  
  });
  
  it('Test for the pipe ..',()=>{
	  let double = new Double();
	  expect(double.transform(2)).toEqual(4);
  });
  
});
