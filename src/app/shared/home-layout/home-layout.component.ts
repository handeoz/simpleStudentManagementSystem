import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
    collapedSideBar: boolean;
    user: User;

    constructor(private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    logout() {
        this.router.navigate(['/login']);
    }

}
