import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColorLibraryComponent } from './color-library.component';

describe('ColorLibraryComponent', () => {
  let component: ColorLibraryComponent;
  let fixture: ComponentFixture<ColorLibraryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
