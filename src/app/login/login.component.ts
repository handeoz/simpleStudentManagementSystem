import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import { USERS} from '../shared/users';
import { User } from '../shared/user';

import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user = <User> {};
    userlist = USERS;

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
                this.router.navigate(['/dashboard']);
                return;
            } else {
                localStorage.setItem('isLoggedin', 'false');
                return;
            }
        }
    }
}

