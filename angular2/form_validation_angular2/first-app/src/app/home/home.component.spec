/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home.component';
import {MyColor} from '../directives/color.directive';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,MyColor ]
    })
    .compileComponents();
  }));

  beforeEach6(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Mouse over test for the span',()=>{
console.log('Mouse over test..')  
  var ele = fixture.debugElement.query(By.css('span'))
	  /*ele.triggerEventHandler('mouseover',null);
	  fixture.detectChanges();
	  console.log('The don color is ')
	  console.log(ele.nativeElement.style.color)*/
	  //expect(ele.nativeElement.style.color).toBe('red')
  });
});
