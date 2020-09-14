import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PageHeaderModule } from '../shared/modules';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SidebarStudentComponent } from './components/sidebar-student/sidebar-student.component';
import { SidebarProfessorComponent } from './components/sidebar-professor/sidebar-professor.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { MyCoursesStudentComponent } from './my-courses-student/my-courses-student.component';
import { MyCoursesProfessorComponent } from './my-courses-professor/my-courses-professor.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    imports: [CommonModule, LayoutRoutingModule, NgbDropdownModule, PageHeaderModule, MatToolbarModule, FormsModule, MatDialogModule, MatInputModule, MatSelectModule, NgbCarouselModule],
    exports: [
        HeaderComponent,
        SidebarStudentComponent,
        SidebarProfessorComponent
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, ProfileComponent, UserListComponent, CourseListComponent, SidebarStudentComponent, SidebarProfessorComponent, MyStudentsComponent, MyCoursesStudentComponent, MyCoursesProfessorComponent, DashboardComponent]
})
export class LayoutModule {}
