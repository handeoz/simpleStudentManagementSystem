import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { USERS } from '../../shared/users';
import { COURSES } from '../../shared/courses';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';

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

    courseindex;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

    delete(id) {
            this.datatabindex = this.courselist.map(function (item) {
                return item.id;
            }).indexOf(id);
            this.courselist.splice(this.datatabindex, 1);
    }

    edit(id) {
      this.courseindex = this.courselist.map(function(course) {
          return course.id;
      }).indexOf(id);
      this.courselist[this.courseindex].id = document.getElementById('id').innerText;
      this.courselist[this.courseindex].code = document.getElementById('code').innerText;
      this.courselist[this.courseindex].name = document.getElementById('name').innerText;
      this.courselist[this.courseindex].description = document.getElementById('description').innerText;
      this.dialog.open(EditUserComponent, {width: '600px', height: '600px', position: {left: '600px'}});
    }
}
