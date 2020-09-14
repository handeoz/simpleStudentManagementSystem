import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-student',
  templateUrl: './layout-student.component.html',
  styleUrls: ['./layout-student.component.css']
})
export class LayoutStudentComponent implements OnInit {
    collapedSideBar: boolean;

    constructor() { }

  ngOnInit(): void {
  }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

}
