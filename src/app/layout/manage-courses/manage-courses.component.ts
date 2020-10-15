import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { COURSES } from '../../shared/courses';
import { USERS } from '../../shared/users';
import { GRADES, User } from '../../shared/user';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { EditGradesComponent } from '../edit-grades/edit-grades.component';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {
    courselist = COURSES;
    userlist = USERS;
    Grades = GRADES;
    user: User;

    selectedCourse = '';
    selectedGrade = '';

  constructor(public dialogRef: MatDialogRef<ManageCoursesComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) { }

  ngOnInit(): void {
      console.log(this.data);
      this.user = this.data.key;
      this.selectedGrade = 'null';
  }

  delete() {
      const course = this.user.courses.find(item => item.name === this.selectedCourse);
      const index = this.user.courses.indexOf(course);
      if (this.user.usertype === 'professor') {
          this.user.courses.splice(index, 1);
      }
      if (this.user.usertype === 'student') {
          const tabindex = this.user.courses.indexOf(course);
          this.user.courses.splice(index, 1);
          this.user.grades[tabindex] = '';
      }
  }

  add() {
      const course = this.courselist.find(item => item.name === this.selectedCourse);
      if (this.user.usertype === 'professor') {
          if (this.user.courses.includes(course)) {
              alert('This course is already in the list!');
              this.dialogRef.close();
              return false;
          }
          this.user.courses.push(course);
          this.dialogRef.close();
      }
      if (this.user.usertype === 'student') {
          const grade = this.Grades.find(item => item === this.selectedGrade);
          const index = this.user.courses.indexOf(course);
          if (this.user.courses.includes(course)) {
              this.user.grades[index] = grade;
          }
          if (!this.user.courses.includes(course)) {
            this.user.courses.push(course);
            this.user.grades.push(grade);
          }
      }
  }

    radioCourseChangeHandler(event: any) {
        this.selectedCourse = event.target.value;
    }

    radioGradeChangeHandler(event: any) {
        this.selectedGrade = event.target.value;
    }
}
