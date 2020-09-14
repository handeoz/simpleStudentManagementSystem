import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProfessorComponent } from './layout-professor.component';

describe('LayoutProfessorComponent', () => {
  let component: LayoutProfessorComponent;
  let fixture: ComponentFixture<LayoutProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
