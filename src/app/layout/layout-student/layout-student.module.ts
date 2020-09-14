import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutStudentRoutingModule } from './layout-student-routing.module';
import { LayoutStudentComponent } from './layout-student/layout-student.component';
import { LayoutModule } from '../layout.module';


@NgModule({
  declarations: [LayoutStudentComponent],
    imports: [
        CommonModule,
        LayoutStudentRoutingModule,
        LayoutModule
    ]
})
export class LayoutStudentModule { }
