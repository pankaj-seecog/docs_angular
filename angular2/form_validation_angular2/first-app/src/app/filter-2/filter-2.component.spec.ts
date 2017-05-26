/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Filter2Component } from './filter-2.component';

describe('Filter2Component', () => {
  let component: Filter2Component;
  let fixture: ComponentFixture<Filter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Filter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
