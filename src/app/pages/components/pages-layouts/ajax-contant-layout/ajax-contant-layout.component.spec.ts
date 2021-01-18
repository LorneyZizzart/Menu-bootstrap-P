import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjaxContantLayoutComponent } from './ajax-contant-layout.component';

describe('AjaxContantLayoutComponent', () => {
  let component: AjaxContantLayoutComponent;
  let fixture: ComponentFixture<AjaxContantLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxContantLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxContantLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
