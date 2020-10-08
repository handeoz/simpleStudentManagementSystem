import { Component, OnInit, ViewChild } from '@angular/core';
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
    // displayedColumns: string[] = ['id', 'username', 'password', 'usertype', 'courses', 'grades', 'action'];
    // dataSource = ELEMENT_DATA;

    userlist = USERS;
    courselist = COURSES;
    user = <User>{};
    datatabindex: number;

    // @ViewChild(MatTable, {static: true}) table: MatTable<any>;

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
        }else this.openEditUserForm();
    }

    openAddUserForm() {
        this.dialog.open(AddUserComponent, { width: '700px', height: '600px', position: { left: '600px' } });
    }


    openEditUserForm() {
        this.dialog.open(EditUserComponent, { width: '700px', height: '600px', position: { left: '600px' } });
    }

    /*openDialog (action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(EditUserComponent, {
            width: '600px',
            height: '600px',
            data: obj,
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result.event === 'Add'){
                this.addRowData(result.data);
            }else if(result.event === 'Update'){
                this.updateRowData(result.data);
            }else if(result.event === 'Delete'){
                this.deleteRowData(result.data);
            }
        });
    }

    addRowData(row_obj){
        var d = new Date();
        this.dataSource.push({
            id: d.getTime(),
            username: row_obj.username,
            password: row_obj.password,
            usertype: row_obj.usertype,
            courses: row_obj.courses,
            grades: row_obj.grades
        });
        this.table.renderRows();

    }
    updateRowData (row_obj) {
        this.dataSource = this.dataSource.filter((value, key) => {
            if (value.id === row_obj.id){
                value.username = row_obj.username;
                value.password = row_obj.password;
                value.usertype = row_obj.usertype;
                value.courses = row_obj.courses;
                value.grades = row_obj.grades;
            }
            return true;
        });
    }
    deleteRowData (row_obj) {
        this.dataSource = this.dataSource.filter((value, key) => {
            return value.id !== row_obj.id;
        });
    }*/

}
