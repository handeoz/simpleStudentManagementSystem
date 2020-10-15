import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { USERS } from '../../shared/users';
import { COURSES } from '../../shared/courses';
import { User } from '../../shared/user';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SignupComponent } from '../../signup/signup.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { Course } from '../../shared/course';
import { MatTable } from '@angular/material/table';

/*export interface UsersData {
    id: number;
    username: string;
    password: string;
    usertype: string;
    courses: Course[];
    grades?: String[];
}

const ELEMENT_DATA: UsersData[] = [
    {id: 1560608769632, username: 'Artificial Intelligence', password: '123', usertype: 'student', courses: [], grades: []},
    {id: 1560608796014, username: 'Machine Learning', password: '123', usertype: 'prof', courses: [], grades: []},
    {id: 1560608787815, username: 'Robotic Process Automation', password: '123', usertype: 'prof', courses: [], grades: []},
    {id: 1560608805101, username: 'Blockchain', password: '123', usertype: 'prof', courses: [], grades: []}
];*/

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

/*    ngAfterViewInit() {
        console.log(this.divView);
        this.divView.nativeElement.innerHTML = 'Hello Angular 10!';
    }*/

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
