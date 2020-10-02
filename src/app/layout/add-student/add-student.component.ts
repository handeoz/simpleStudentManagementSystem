import { Component, OnInit } from '@angular/core';
import { COURSES } from '../../shared/courses';
import { GRADES, User } from '../../shared/user';
import { USERS } from '../../shared/users';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
    userlist = USERS;
    courselist = COURSES;
    user = new User();

  constructor() { }

  ngOnInit(): void {
  }

    add(id, username, password) {
      this.user.id = id;
      this.user.username = username;
      this.user.password = password;
      this.user.usertype = 'student';
      this.userlist.push(this.user);
    }
}
