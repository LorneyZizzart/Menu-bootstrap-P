import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OtherAppComponent } from './other-app.component';

describe('OtherAppComponent', () => {
  let component: OtherAppComponent;
  let fixture: ComponentFixture<OtherAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
