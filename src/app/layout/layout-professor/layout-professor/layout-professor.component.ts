import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-professor',
  templateUrl: './layout-professor.component.html',
  styleUrls: ['./layout-professor.component.css']
})
export class LayoutProfessorComponent implements OnInit {
    collapedSideBar: boolean;

    constructor() { }

  ngOnInit(): void {
  }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

}
