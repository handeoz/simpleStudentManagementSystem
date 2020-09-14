import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';

@Component({
  selector: 'app-my-courses-professor',
  templateUrl: './my-courses-professor.component.html',
  styleUrls: ['./my-courses-professor.component.css']
})
export class MyCoursesProfessorComponent implements OnInit {
    user = <User>{};

  constructor() { }

  ngOnInit(): void {
  }

}
