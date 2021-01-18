import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OffcanvasSidebarLayoutComponent } from './offcanvas-sidebar-layout.component';

describe('OffcanvasSidebarLayoutComponent', () => {
  let component: OffcanvasSidebarLayoutComponent;
  let fixture: ComponentFixture<OffcanvasSidebarLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OffcanvasSidebarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffcanvasSidebarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
