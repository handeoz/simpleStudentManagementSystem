import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { USERS } from '../../shared/users';
import { COURSES } from '../../shared/courses';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
  animations: [routerTransition()]
})
export class MyCoursesComponent implements OnInit {
    userlist = USERS;
    courselist = COURSES;
    username = localStorage.getItem('username');
    user = this.userlist.find(usr => usr.username === this.username);

  constructor() { }

  ngOnInit(): void {
  }

}
