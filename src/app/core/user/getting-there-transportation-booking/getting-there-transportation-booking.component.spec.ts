import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingThereTransportationBookingComponent } from './getting-there-transportation-booking.component';

describe('GettingThereTransportationBookingComponent', () => {
  let component: GettingThereTransportationBookingComponent;
  let fixture: ComponentFixture<GettingThereTransportationBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingThereTransportationBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingThereTransportationBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
