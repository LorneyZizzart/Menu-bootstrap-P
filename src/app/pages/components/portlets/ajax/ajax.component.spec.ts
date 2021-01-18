import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjaxComponent } from './ajax.component';

describe('AjaxComponent', () => {
  let component: AjaxComponent;
  let fixture: ComponentFixture<AjaxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
