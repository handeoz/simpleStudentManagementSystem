import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AuthGuard } from './shared/guard';
import { UserListComponent } from './layout/user-list/user-list.component';
import { CourseListComponent } from './layout/course-list/course-list.component';
import { MyStudentsComponent } from './layout/my-students/my-students.component';
import { MyCoursesComponent } from './layout/my-courses/my-courses.component';
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            { path: '', component: LoginComponent, pathMatch: 'full' },
            { path: 'login', component: LoginComponent }

        ]
    },
    {
        path: '',
        component: HomeLayoutComponent,
        children: [
            { path: 'dashboard/:id', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
            { path: 'user-list', component: UserListComponent, pathMatch: 'full'},
            { path: 'course-list', component: CourseListComponent, pathMatch: 'full'},
            { path: 'my-students', component: MyStudentsComponent, pathMatch: 'full'},
            { path: 'my-courses', component: MyCoursesComponent, pathMatch: 'full'},
            { path: 'signup', component: SignupComponent, pathMatch: 'full'}
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    //{ path: 'signup', component: SignupComponent, pathMatch: 'full'},
    {
        path: 'error',
        loadChildren: () => import('./server-error/server-error.module').then((m) => m.ServerErrorModule)
    },
    {
        path: 'access-denied',
        loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
    },
    { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
