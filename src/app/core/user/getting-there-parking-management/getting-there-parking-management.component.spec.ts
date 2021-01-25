import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingThereParkingManagementComponent } from './getting-there-parking-management.component';

describe('GettingThereParkingManagementComponent', () => {
  let component: GettingThereParkingManagementComponent;
  let fixture: ComponentFixture<GettingThereParkingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingThereParkingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingThereParkingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
