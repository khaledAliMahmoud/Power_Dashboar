import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmChartsComponent } from './alarm-charts.component';

describe('AlarmChartsComponent', () => {
  let component: AlarmChartsComponent;
  let fixture: ComponentFixture<AlarmChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
