import { Component, OnInit } from '@angular/core';
import { GRADES, User, UserType } from '../../shared/user';
import { COURSES } from '../../shared/courses';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    userTypes = UserType;
    courselist = COURSES;
    Grades = GRADES;
    user = <User>{};

    selectedType = '';
    selectedCourse = '';
    selectedGrade = '';

    userID;

  constructor(public dialogRef: MatDialogRef<EditUserComponent>) { }

  ngOnInit(): void {
  }

    onSubmit() {

    }
}
