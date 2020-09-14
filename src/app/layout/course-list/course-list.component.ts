import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { USERS } from '../../shared/users';
import { COURSES } from '../../shared/courses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  animations: [routerTransition()]

})
export class CourseListComponent implements OnInit {
    userlist = USERS;
    courselist = COURSES;
    datatabindex: number;

  constructor() { }

  ngOnInit(): void {
  }

    delete(id) {
            this.datatabindex = this.courselist.map(function (item) {
                return item.id;
            }).indexOf(id);
            this.courselist.splice(this.datatabindex, 1);
    }
}
