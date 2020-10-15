import { Component, Inject, OnInit, Optional } from '@angular/core';
import { COURSES } from '../../shared/courses';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../shared/course';
import { USERS } from '../../shared/users';
import { GRADES, User } from '../../shared/user';

@Component({
  selector: 'app-edit-grades',
  templateUrl: './edit-grades.component.html',
  styleUrls: ['./edit-grades.component.css']
})
export class EditGradesComponent implements OnInit {
    courselist = COURSES;
    course: Course;
    userlist = USERS;
    Grades = GRADES;

    selectedStudent = '';
    selectedGrade = '';

  constructor(public dialogRef: MatDialogRef<EditGradesComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
      console.log(this.data.key);
      const course = this.courselist.find(item => item.id === this.data.key);
      this.course = course;
  }

    radioStudentChangeHandler(event) {
        this.selectedStudent = event.target.value;
    }

    radioGradeChangeHandler(event) {
        this.selectedGrade = event.target.value;
    }

    editGrades(selectedStudentName, selectedGrade) {
      this.selectedStudent = selectedStudentName;
      this.selectedGrade = selectedGrade;

      const selectedStudent = this.userlist.find(item => item.username === selectedStudentName);
      const index = selectedStudent.courses.indexOf(this.course);
      selectedStudent.grades[index] = selectedGrade;

      this.dialogRef.close();

    }
}
