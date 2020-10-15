import { Component, ElementRef, Inject, Input, OnInit, ViewChild, AfterViewInit, Optional } from '@angular/core';
import { GRADES, User, UserType } from '../../shared/user';
import { COURSES } from '../../shared/courses';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { USERS } from '../../shared/users';
import { Course } from '../../shared/course';
import { EditGradesComponent } from '../edit-grades/edit-grades.component';
import { ManageCoursesComponent } from '../manage-courses/manage-courses.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    userTypes = UserType;
    userlist = USERS;
    courselist = COURSES;
    Grades = GRADES;

    selectedCourse = '';
    selectedGrade = '';

    user: User;

  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
      console.log(this.data);
      const usr = this.userlist.find(item => item.id === this.data.key);
      console.log(usr);
      this.user = usr;
       // document.getElementById('inputId3').innerText = usr.id;
  }

/*  ngAfterViewInit() {
        console.log(this.divView);
        this.divView.nativeElement.innerHTML = 'Hello Angular 10!';
  }*/

    onSubmit() {

    }

    editUser(selectedCourseName, selectedGrade) {
        this.selectedGrade = selectedGrade;

        const selectedCourse = this.courselist.find(item => item.name === selectedCourseName);
        const index = this.user.courses.indexOf(selectedCourse);
        this.user.grades[index] = selectedGrade;


        this.dialogRef.close();
    }


    radioCourseChangeHandler(event: any) {
        this.selectedCourse = event.target.value;
    }

    radioGradeChangeHandler(event: any) {
        this.selectedGrade = event.target.value;
    }

    manageCourses(user) {
        return this.dialog.open(ManageCoursesComponent, {
            data: {
                key: user
            }
        });
    }
}
