import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageDropComponent } from './baggage-drop.component';

describe('BaggageDropComponent', () => {
  let component: BaggageDropComponent;
  let fixture: ComponentFixture<BaggageDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaggageDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggageDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
