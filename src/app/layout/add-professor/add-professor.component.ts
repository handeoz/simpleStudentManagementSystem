import { Component, OnInit } from '@angular/core';
import { COURSES } from '../../shared/courses';
import { User } from '../../shared/user';
import { USERS } from '../../shared/users';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent implements OnInit {
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
        this.user.usertype = 'professor';
        this.userlist.push(this.user);
        console.log(this.user);

    }
}
