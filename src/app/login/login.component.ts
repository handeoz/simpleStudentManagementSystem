import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import { USERS} from '../shared/users';
import { User } from '../shared/user';

import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user = <User> {};
    userlist = USERS;
    id;
    username;
    usertype;

    constructor(public router: Router, private _Activatedroute: ActivatedRoute) {

    }

    ngOnInit() {
        this._Activatedroute.paramMap.subscribe(params => {
            this.user.id = params.get('id');
        });
    }

    onLoggedin(username, password) {
        for (let i = 0; i < this.userlist.length; i++) {
            if (this.userlist[i].username === username && this.userlist[i].password === password) {
                localStorage.setItem('isLoggedin', 'true');
                this.user = this.userlist[i];
                this.id = this.userlist[i].id;
                this.username = this.userlist[i].username;
                this.usertype = this.userlist[i].usertype;
                localStorage.setItem('id', this.id);
                localStorage.setItem('username', this.username);
                localStorage.setItem('usertype', this.usertype);
                this.router.navigate(['/dashboard', localStorage.getItem('username')]);
                return;
            }
            }
            localStorage.setItem('isLoggedin', 'false');
        alert('Wrong password or username!');
            return;
    }
}

