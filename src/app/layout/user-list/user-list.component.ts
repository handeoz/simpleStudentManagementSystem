import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { USERS } from '../../shared/users';
import { COURSES } from '../../shared/courses';
import { User } from '../../shared/user';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SignupComponent } from '../../signup/signup.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { AddProfessorComponent } from '../add-professor/add-professor.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

declare var $: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [routerTransition()]

})
export class UserListComponent implements OnInit {
    userlist = USERS;
    courselist = COURSES;
    user = <User> {};
    datatabindex: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

    delete(id) {
        this.datatabindex = this.userlist.map(function (item) {
            return item.id;
        }).indexOf(id);
        if (this.datatabindex !== 0) {
            this.userlist.splice(this.datatabindex, 1);
        }
        else alert('You are trying to delete Admin.');
    }

    edit(id) {
      this.datatabindex = this.userlist.map(function(item) {
          return item.id;
      }).indexOf(id);

      if (this.userlist[this.datatabindex].usertype === 'admin') {
          alert('You are trying to edit Admin.');
      }
      else this.openEditUserForm(id);
    }

    openAddUserForm() {
        this.dialog.open(AddUserComponent, {width: '600px', height: '600px', position: {left: '600px'}});
    }

    openEditUserForm(id) {
        this.dialog.open( EditUserComponent, {width: '600px', height: '600px', position: {left: '600px'}});
    }
}
