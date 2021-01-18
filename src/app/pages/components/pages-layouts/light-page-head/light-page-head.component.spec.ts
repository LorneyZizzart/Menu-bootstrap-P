import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LightPageHeadComponent } from './light-page-head.component';

describe('LightPageHeadComponent', () => {
  let component: LightPageHeadComponent;
  let fixture: ComponentFixture<LightPageHeadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LightPageHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightPageHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
