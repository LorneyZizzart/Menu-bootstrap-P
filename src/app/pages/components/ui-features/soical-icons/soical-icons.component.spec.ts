import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SoicalIconsComponent } from './soical-icons.component';

describe('SoicalIconsComponent', () => {
  let component: SoicalIconsComponent;
  let fixture: ComponentFixture<SoicalIconsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SoicalIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoicalIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
