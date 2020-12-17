import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveYourBodyComponent } from './improve-your-body.component';

describe('ImproveYourBodyComponent', () => {
  let component: ImproveYourBodyComponent;
  let fixture: ComponentFixture<ImproveYourBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImproveYourBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImproveYourBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
