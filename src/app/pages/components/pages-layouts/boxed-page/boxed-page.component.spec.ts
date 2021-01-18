import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BoxedPageComponent } from './boxed-page.component';

describe('BoxedPageComponent', () => {
  let component: BoxedPageComponent;
  let fixture: ComponentFixture<BoxedPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
