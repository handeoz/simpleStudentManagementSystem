import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { USERS } from '../../shared/users';
import { COURSES } from '../../shared/courses';
import { User } from '../../shared/user';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [routerTransition()]

})
export class UserListComponent implements OnInit {
    userlist = USERS;
    courselist = COURSES;
    user = <User>{};
    datatabindex: number;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    delete(id) {
        this.datatabindex = this.userlist.map(function(item) {
            return item.id;
        }).indexOf(id);
        if (this.datatabindex !== 0) {
            this.userlist.splice(this.datatabindex, 1);
        } else alert('You are trying to delete Admin.');
    }

    edit(id) {
        this.datatabindex = this.userlist.map(function(item) {
            return item.id;
        }).indexOf(id);

        if (this.userlist[this.datatabindex].usertype === 'admin') {
            alert('You are trying to edit Admin.');
        } else this.openEditUserForm(id);
    }

    openAddUserForm() {
        this.dialog.open(AddUserComponent);
    }


    openEditUserForm(idToPass) {
        // this.dialog.open(EditUserComponent, id);
        return this.dialog.open(EditUserComponent, {
            data: {
                key: idToPass
            }
        });
    }
}
