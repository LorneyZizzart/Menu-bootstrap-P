import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormXEditableComponent } from './form-x-editable.component';

describe('FormXEditableComponent', () => {
  let component: FormXEditableComponent;
  let fixture: ComponentFixture<FormXEditableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormXEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormXEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
