import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WYSIWYGEditorComponent } from './wysiwyg-editor.component';

describe('WYSIWYGEditorComponent', () => {
  let component: WYSIWYGEditorComponent;
  let fixture: ComponentFixture<WYSIWYGEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WYSIWYGEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WYSIWYGEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
