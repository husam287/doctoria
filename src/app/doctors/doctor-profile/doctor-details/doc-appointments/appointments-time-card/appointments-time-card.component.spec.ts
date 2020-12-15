import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsTimeCardComponent } from './appointments-time-card.component';

describe('AppointmentsTimeCardComponent', () => {
  let component: AppointmentsTimeCardComponent;
  let fixture: ComponentFixture<AppointmentsTimeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsTimeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsTimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
