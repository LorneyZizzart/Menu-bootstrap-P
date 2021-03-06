import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FontIconsComponent } from './font-icons.component';

describe('FontIconsComponent', () => {
  let component: FontIconsComponent;
  let fixture: ComponentFixture<FontIconsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FontIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
