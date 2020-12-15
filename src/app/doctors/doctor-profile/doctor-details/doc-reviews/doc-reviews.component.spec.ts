import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocReviewsComponent } from './doc-reviews.component';

describe('DocReviewsComponent', () => {
  let component: DocReviewsComponent;
  let fixture: ComponentFixture<DocReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
