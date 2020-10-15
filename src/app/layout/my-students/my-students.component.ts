import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { USERS } from '../../shared/users';
import { COURSES } from '../../shared/courses';
import { User } from '../../shared/user';
import { MatDialog } from '@angular/material/dialog';
import { EditGradesComponent } from '../edit-grades/edit-grades.component';

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.css'],
  animations: [routerTransition()]

})
export class MyStudentsComponent implements OnInit {
    userlist = USERS;
    courselist = COURSES;
    username = localStorage.getItem('username');
    user = this.userlist.find(usr => usr.username === this.username);

    constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

    edit(course_id) {
        return this.dialog.open(EditGradesComponent, {
            data: {
                key: course_id
            }
        });

    }
}
