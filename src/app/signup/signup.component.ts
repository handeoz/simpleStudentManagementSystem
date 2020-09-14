import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { UserType } from '../shared/user';
import { COURSES } from '../shared/courses';
import { GRADES } from '../shared/user';
import { USERS } from '../shared/users';
import { User } from '../shared/user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    userType = UserType;
    courselist = COURSES;
    Grades = GRADES;
    //user = <User> {};
    user = new User ();

    constructor() {}

    ngOnInit() {}

    addUser(id, username, password, usertype, course, grade) {
        this.user.id = id;
        this.user.username = username;
        this.user.password = password;
        this.userType = usertype;
        this.user.courses[0] = course;
        this.user.grades[0] = grade;
        USERS.push(this.user);
    }
}
