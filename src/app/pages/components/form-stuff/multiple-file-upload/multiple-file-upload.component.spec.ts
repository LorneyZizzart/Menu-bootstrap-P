import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultipleFileUploadComponent } from './multiple-file-upload.component';

describe('MultipleFileUploadComponent', () => {
  let component: MultipleFileUploadComponent;
  let fixture: ComponentFixture<MultipleFileUploadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
