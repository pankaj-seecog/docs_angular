/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GrossComponent } from './gross.component';
import {MyColor} from '../directives/color.directive';
describe('GrossComponent', () => {
  let component: GrossComponent;
  let fixture: ComponentFixture<GrossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossComponent,MyColor ]
    })
    .compileComponents();
  }));

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
});
