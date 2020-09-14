import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { USERS } from '../../shared/users';
import { COURSES } from '../../shared/courses';
import { User } from '../../shared/user';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';

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
        this.userlist.splice(this.datatabindex, 1);
    }

}
