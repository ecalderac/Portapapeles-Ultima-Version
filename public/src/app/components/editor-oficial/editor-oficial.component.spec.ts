import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorOficialComponent } from './editor-oficial.component';

describe('EditorOficialComponent', () => {
  let component: EditorOficialComponent;
  let fixture: ComponentFixture<EditorOficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorOficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorOficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
