import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocBasicComponent } from './edit-doc-basic.component';

describe('EditDocBasicComponent', () => {
  let component: EditDocBasicComponent;
  let fixture: ComponentFixture<EditDocBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDocBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDocBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
