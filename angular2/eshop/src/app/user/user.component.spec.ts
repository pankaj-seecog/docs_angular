/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed,tick,fakeAsync,inject} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {UserService} from './user.service';
import {UserComponent} from './user.component';
import {DataService} from './data.service';
import {Engine} from './services/horse.service';
import {CalculatorService} from './services/calculator.service';
import {Perimeter} from './services/perimeter.service';
import {TriangleService} from './services/triangle.service';
import {Hra} from './services/hra.service';
import {Da} from './services/da.service';
import {SalaryService} from './services/salary.service';
import {ColorDirective} from './directives/color.directive';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let calculator : CalculatorService;
  let tri : TriangleService;
  let salSer : SalaryService;
  beforeEach(()=>{
	  TestBed.configureTestingModule({
	  providers : [Da,Hra,SalaryService]
	  });
  });
  
  
  beforeEach(() => {
  TestBed.configureTestingModule({
      providers: [Perimeter, TriangleService]
    });
  });
  
  beforeEach(async(()=>{
	 TestBed.configureTestingModule({
		 declarations : [ColorDirective]
	 })
  }));
  
  beforeEach(async(() => {
	  calculator = new CalculatorService();
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    }).compileComponents();
  }));
  
  
   beforeEach(inject([TriangleService], (triangleService: TriangleService) => {
    tri = triangleService;
  }));
  
  beforeEach(inject([SalaryService],(salaryService : SalaryService)=>{
	  salSer = salaryService;
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('SalaryTest',()=>{
	  console.log('The goss salary is ')
	  var sal = salSer.grossSalary(12000);
	  console.log('The salary is ')
	  console.log(sal)
	  expect(sal).toEqual(16920);
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
  /*
  it('Should not fetch data if not called asynchronus way',fakeAsync(()=>{
	  var fixture = TestBed.createComponent(UserComponent);
	  var app = fixture.debugElement.componentInstance;
	  var dataService = fixture.debugElement.injector.get(DataService);
	  let spy = spyOn(dataService,'getData').and.returnValue(Promise.resolve('Data'));
	  fixture.detectChanges();
	  tick();
	  expect(app.sRecord).toBe('Data');
  }));
  */
  
  it('should return it\'s horsepower', () => {
    let subject = new Engine();
    expect(subject.getHorsepower()).toEqual(150);
  });
  
  it('Multiply test',()=>{
	 //let calculator = new CalculatorService(); 
	 expect(calculator.mul(5,3)).toEqual(15); 
  });
  
  it('Add test',()=>{
	  //let calculator = new CalculatorService();
	  expect(calculator.add(2,3)).toEqual(5);
  });
  
  it('Triangle Service',()=>{
	 
     let ans = tri.area(2,3,2);
     console.log('The area is '+ans)	 
	 expect(tri.area(2,3,2)).toEqual(1.984313483298443);
	  
  });
  
  it('Directive Test',()=>{
	  let fixture = TestBed.createComponent(ColorDirective);
	  //let app = fixture.debugElement.componentInstance;
	  
  });
  
  
  
});
