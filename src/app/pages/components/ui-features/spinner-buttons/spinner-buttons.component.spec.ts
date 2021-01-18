import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpinnerButtonsComponent } from './spinner-buttons.component';

describe('SpinnerButtonsComponent', () => {
  let component: SpinnerButtonsComponent;
  let fixture: ComponentFixture<SpinnerButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
