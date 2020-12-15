import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsCheckoutComponent } from './appointments-checkout.component';

describe('AppointmentsCheckoutComponent', () => {
  let component: AppointmentsCheckoutComponent;
  let fixture: ComponentFixture<AppointmentsCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
