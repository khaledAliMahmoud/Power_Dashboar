import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmOverallComponent } from './alarm-overall.component';

describe('AlarmOverallComponent', () => {
  let component: AlarmOverallComponent;
  let fixture: ComponentFixture<AlarmOverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmOverallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
