import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentMyJourneyComponent } from './enrollment-my-journey.component';

describe('EnrollmentMyJourneyComponent', () => {
  let component: EnrollmentMyJourneyComponent;
  let fixture: ComponentFixture<EnrollmentMyJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentMyJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentMyJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
