import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GRADES, User, UserType } from '../../shared/user';
import { COURSES } from '../../shared/courses';
import { USERS } from '../../shared/users';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    userTypes = UserType;
    courselist = COURSES;
    Grades = GRADES;
    user = new User();
    selectedType = '';
    selectedCourse = '';
    selectedGrade = '';
    userID;

  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  addUser(id, username, password, selectedType, selectedCourse, selectedGrade) {
      if (document.getElementById('id'))
          this.user.id = id;
          this.user.username = username;
          this.user.password = password;
          this.user.usertype = selectedType;

      let course = this.courselist.find(course => course.name === selectedCourse);

      this.user.courses.push(course);

          if (selectedType === 'Student') {
              this.user.grades.push(selectedGrade);
          }

          USERS.push(this.user);
          this.dialogRef.close();
  }

  radioTypeChangeHandler (event: any) {
      this.selectedType = event.target.value;
  }

    radioCourseChangeHandler(event: any) {
        this.selectedCourse = event.target.value;
    }

    radioGradeChangeHandler(event: any) {
        this.selectedGrade = event.target.value;
    }

    closeDialog() {
        this.dialogRef.close();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
