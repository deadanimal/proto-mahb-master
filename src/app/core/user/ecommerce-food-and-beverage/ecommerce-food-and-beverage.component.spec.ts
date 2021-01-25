import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceFoodAndBeverageComponent } from './ecommerce-food-and-beverage.component';

describe('EcommerceFoodAndBeverageComponent', () => {
  let component: EcommerceFoodAndBeverageComponent;
  let fixture: ComponentFixture<EcommerceFoodAndBeverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceFoodAndBeverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceFoodAndBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
