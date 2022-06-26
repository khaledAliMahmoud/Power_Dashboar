import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDetails2Component } from './station-details2.component';

describe('StationDetails2Component', () => {
  let component: StationDetails2Component;
  let fixture: ComponentFixture<StationDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationDetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
