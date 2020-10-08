import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { UserType } from '../shared/user';
import { COURSES } from '../shared/courses';
import { GRADES } from '../shared/user';
import { USERS } from '../shared/users';
import { User } from '../shared/user';
import { CommonService } from '../services/common.service';

import { MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent {
    userType = UserType;
    courselist = COURSES;
    Grades = GRADES;
    user = <User> {};
    // user = new User ();

    constructor(    public dialogRef: MatDialogRef<SignupComponent>
    ) {

    }

    addUser(id, username, password) {
        this.user.id = id;
        this.user.username = username;
        this.user.password = password;
        USERS.push(this.user);
        console.log('User: ', this.user);
        this.dialogRef.close();
    }

}

    // ngOnInit() {}


/*    addUser(id, username, password, usertype, course, grade) {
        this.user.id = id;
        this.user.username = username;
        this.user.password = password;
        this.userType = usertype;
        this.user.courses[0] = course;
        this.user.grades[0] = grade;
        USERS.push(this.user);
    }*/



