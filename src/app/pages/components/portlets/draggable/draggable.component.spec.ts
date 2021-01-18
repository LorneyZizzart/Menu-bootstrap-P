import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DraggableComponent } from './draggable.component';

describe('DraggableComponent', () => {
  let component: DraggableComponent;
  let fixture: ComponentFixture<DraggableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
