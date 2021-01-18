import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HoverSidebarMenuComponent } from './hover-sidebar-menu.component';

describe('HoverSidebarMenuComponent', () => {
  let component: HoverSidebarMenuComponent;
  let fixture: ComponentFixture<HoverSidebarMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverSidebarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
