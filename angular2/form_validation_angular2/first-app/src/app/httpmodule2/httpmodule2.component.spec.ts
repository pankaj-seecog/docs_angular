/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Httpmodule2Component } from './httpmodule2.component';

describe('Httpmodule2Component', () => {
  let component: Httpmodule2Component;
  let fixture: ComponentFixture<Httpmodule2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Httpmodule2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Httpmodule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
