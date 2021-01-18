import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FixedSidebarLayoutComponent } from './fixed-sidebar-layout.component';

describe('FixedSidebarLayoutComponent', () => {
  let component: FixedSidebarLayoutComponent;
  let fixture: ComponentFixture<FixedSidebarLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedSidebarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedSidebarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
