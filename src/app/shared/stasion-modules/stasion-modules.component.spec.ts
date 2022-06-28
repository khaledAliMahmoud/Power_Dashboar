import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StasionModulesComponent } from './stasion-modules.component';

describe('StasionModulesComponent', () => {
  let component: StasionModulesComponent;
  let fixture: ComponentFixture<StasionModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StasionModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StasionModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
