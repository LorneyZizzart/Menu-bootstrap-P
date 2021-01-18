import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TouchspinComponent } from './touchspin.component';

describe('TouchspinComponent', () => {
  let component: TouchspinComponent;
  let fixture: ComponentFixture<TouchspinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchspinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchspinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
