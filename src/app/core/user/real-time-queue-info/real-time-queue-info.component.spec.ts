import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeQueueInfoComponent } from './real-time-queue-info.component';

describe('RealTimeQueueInfoComponent', () => {
  let component: RealTimeQueueInfoComponent;
  let fixture: ComponentFixture<RealTimeQueueInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimeQueueInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeQueueInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
