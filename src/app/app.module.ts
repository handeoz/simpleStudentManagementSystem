import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PageHeaderModule } from './shared/modules';

import { AuthGuard } from './shared/guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { MyCoursesComponent } from './layout/my-courses/my-courses.component';
import { MyStudentsComponent } from './layout/my-students/my-students.component';
import { CourseListComponent } from './layout/course-list/course-list.component';
import { UserListComponent } from './layout/user-list/user-list.component';
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';
import { SignupComponent } from './signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddUserComponent } from './layout/add-user/add-user.component';
import { AddStudentComponent } from './layout/add-student/add-student.component';
import { AddProfessorComponent } from './layout/add-professor/add-professor.component';
import { MatButtonModule } from '@angular/material/button';
import { EditUserComponent } from './layout/edit-user/edit-user.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        NgbModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        NgbCarouselModule,
        PageHeaderModule,
        MatDialogModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule,
        MatInputModule,
        MatTableModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        SidebarComponent,
        DashboardComponent,
        MyCoursesComponent,
        MyStudentsComponent,
        CourseListComponent,
        UserListComponent,
        LoginLayoutComponent,
        HomeLayoutComponent,
        SignupComponent,
        AddUserComponent,
        AddStudentComponent,
        AddProfessorComponent,
        EditUserComponent
    ],
    entryComponents: [
        AddUserComponent,
        EditUserComponent
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
