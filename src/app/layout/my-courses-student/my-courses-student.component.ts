import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { USERS } from '../../shared/users';
import { User } from '../../shared/user';

@Component({
  selector: 'app-my-courses-student',
  templateUrl: './my-courses-student.component.html',
  styleUrls: ['./my-courses-student.component.css'],
  animations: [routerTransition()]

})
export class MyCoursesStudentComponent implements OnInit {
    userlist = USERS;
    user = <User>{};

    constructor() { }

  ngOnInit(): void {
  }

}
