import { Component, Inject, OnInit } from '@angular/core';
import { GRADES, User, UserType } from '../../shared/user';
import { COURSES } from '../../shared/courses';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { USERS } from '../../shared/users';
import { Course } from '../../shared/course';

/*
export interface UsersData {
    id: string;
    username: string;
    password: string;
    usertype: string;
    courses: Course[];
    grades?: String[];
}
*/

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    // action: string;
    // local_data: any;

    userTypes = UserType;
    userlist = USERS;
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

    editUser(id) {
     let usr = this.userlist.find (item => item.id === id);
/*        if (document.getElementById('edit_{{user.username}}')) {
           // let user = this.userlist.find(user => user.username === username);

            const datatabindex = this.userlist.map(function(item) {
                return item.username;
            }).indexOf(username);

            document.getElementById('inputId3').innerHTML = this.userlist[datatabindex].id;
            document.getElementById('inputUsername3').innerHTML = this.userlist[datatabindex].username;
            document.getElementById('inputPassword3').innerHTML = this.userlist[datatabindex].password;*/
/*        this.userlist = this.userlist.filter((value, key) => {
            if (value.id === id) {
                value.username = document.getElementById()
            }
        });*/
        // document.getElementById('id_{{user.id}}').innerHTML = usr.id;


        this.dialogRef.close();
    }

/*    doAction() {
        this.dialogRef.close({event: this.action, data: this.local_data});
    }

    closeDialog() {
        this.dialogRef.close({event: 'Cancel'});
    }*/


/*    radioTypeChangeHandler (event: any) {
        this.selectedType = event.target.value;
    }

    radioCourseChangeHandler(event: any) {
        this.selectedCourse = event.target.value;
    }

    radioGradeChangeHandler(event: any) {
        this.selectedGrade = event.target.value;
    }*/
}
