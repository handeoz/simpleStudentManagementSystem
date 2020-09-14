import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesProfessorComponent } from './my-courses-professor.component';

describe('MyCoursesProfessorComponent', () => {
  let component: MyCoursesProfessorComponent;
  let fixture: ComponentFixture<MyCoursesProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCoursesProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoursesProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
