import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralComponentsComponent } from './general-components.component';

describe('GeneralComponentsComponent', () => {
  let component: GeneralComponentsComponent;
  let fixture: ComponentFixture<GeneralComponentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
