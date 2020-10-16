import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { COURSES } from '../../shared/courses';
import { USERS } from '../../shared/users';
import { GRADES, User } from '../../shared/user';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Grades } from '../../shared/grades';

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
    form: FormGroup;
    checkArray: FormArray;

  constructor(public dialogRef: MatDialogRef<ManageCoursesComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog, private fb: FormBuilder) {
      this.form = this.fb.group({
          checkArray: this.fb.array([])
      });
  }

  ngOnInit(): void {
      console.log(this.data);
      this.user = this.data.key;
      this.selectedGrade = 'null';
  }

  delete(course) {
     // const course = this.user.courses.find(item => item === course);
      const index = this.user.courses.indexOf(course);
      if (this.user.usertype === 'professor') {
          this.user.courses.splice(index, 1);
      }
      if (this.user.usertype === 'student') {
          this.user.courses.splice(index, 1);
          this.user.grades.splice(index, 1);
      }
  }

    radioCourseChangeHandler(event: any) {
      this.selectedCourse = event.target.valueChecked;
    }

    radioGradeChangeHandler(event: any) {
        this.selectedGrade = event.target.value;
    }

    onCheckboxChange(e) {
        const checkArray: FormArray = this.form.get('checkArray') as FormArray;

        if (e.target.checked) {
            checkArray.push(new FormControl(e.target.value));
        } else {
            let i = 0;
            checkArray.controls.forEach((item: FormControl) => {
                if (item.value === e.target.value) {
                    checkArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }

    submitForm() {
      if (this.user.usertype === 'professor') {
          for (let i = 0; i < this.form.value.checkArray.length; i++) {
              const course = this.courselist.find(item => item.name === this.form.value.checkArray[i]);
              if (!this.user.courses.includes(course)) {this.user.courses.push(course);}
          }
      }

      if (this.user.usertype === 'student') {
          for (let i = 0; i < this.form.value.checkArray.length; i++) {
              const course = this.courselist.find(item => item.name === this.form.value.checkArray[i]);
              if (!this.user.courses.includes(course)) {this.user.courses.push(course);}
              const index = this.user.courses.indexOf(course);
              this.user.grades[index] = this.selectedGrade;
          }
      }
    }


}
