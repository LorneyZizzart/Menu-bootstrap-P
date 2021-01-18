import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OffCanvasMobileMenuComponent } from './off-canvas-mobile-menu.component';

describe('OffCanvasMobileMenuComponent', () => {
  let component: OffCanvasMobileMenuComponent;
  let fixture: ComponentFixture<OffCanvasMobileMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OffCanvasMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffCanvasMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
