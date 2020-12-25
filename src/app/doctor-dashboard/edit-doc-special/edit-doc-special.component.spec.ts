import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocSpecialComponent } from './edit-doc-special.component';

describe('EditDocSpecialComponent', () => {
  let component: EditDocSpecialComponent;
  let fixture: ComponentFixture<EditDocSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDocSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDocSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
