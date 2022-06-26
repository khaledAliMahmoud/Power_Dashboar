import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDetails1Component } from './station-details1.component';

describe('StationDetails1Component', () => {
  let component: StationDetails1Component;
  let fixture: ComponentFixture<StationDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationDetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
