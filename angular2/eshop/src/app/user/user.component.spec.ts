/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed,tick,fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {UserService} from './user.service';
import { UserComponent } from './user.component';
import {CalculatorService} from './calculator.service';
import {DataService} from './data.service';
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
  
  /*it('Service name should be equal to component name ',()=>{
	  var fixture = TestBed.createComponent(UserComponent);
	  var app = fixture.debugElement.componentInstance;
	  var userService = fixture.debugElement.injector.get(UserService);
	  fixture.detectChanges();
	  expect(userService.user.name).toEqual(app.user.name)
  }
  });
  
  it('Sum should be 4',()=>{
	  var fixture = TestBed.createComponent(UserComponent);
	  var app = fixture.debugElement.componentInstance;
	  var calculatorService = fixture.debugElement.injector.get(CalculatorService);
	  fixture.detectChanges();
	  expect(calculatorService.add(2,2)).toEqual(4);
  });  
  */
  
  it('Should not fetch data if not called asynchronus way',fakeAsync(()=>{
	  var fixture = TestBed.createComponent(UserComponent);
	  var app = fixture.debugElement.componentInstance;
	  var dataService = fixture.debugElement.injector.get(DataService);
	  let spy = spyOn(dataService,'getData').and.returnValue(Promise.resolve('Data'));
	  fixture.detectChanges();
	  tick();
	  expect(app.sRecord).toBe('Data');
  }));
  
  
  
  
});
