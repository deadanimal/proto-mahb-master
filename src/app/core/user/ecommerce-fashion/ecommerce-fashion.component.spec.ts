import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceFashionComponent } from './ecommerce-fashion.component';

describe('EcommerceFashionComponent', () => {
  let component: EcommerceFashionComponent;
  let fixture: ComponentFixture<EcommerceFashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceFashionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
