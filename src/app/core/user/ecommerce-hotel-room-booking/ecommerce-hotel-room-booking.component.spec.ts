import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceHotelRoomBookingComponent } from './ecommerce-hotel-room-booking.component';

describe('EcommerceHotelRoomBookingComponent', () => {
  let component: EcommerceHotelRoomBookingComponent;
  let fixture: ComponentFixture<EcommerceHotelRoomBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceHotelRoomBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceHotelRoomBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
