import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UserListComponent } from './user-list/user-list.component';
import { CourseListComponent} from './course-list/course-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from '../signup/signup.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuard } from '../shared/guard';

const routes: Routes = [
/*    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
        ]
    },*/
    {
        path: 'dashboard',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardComponent }
        ]
    },
    {
        path: 'user-list',
        component: LayoutComponent,
        children: [
            { path: '', component: UserListComponent }
        ]
    },
    {
        path: 'course-list',
        component: LayoutComponent,
        children: [
            { path: '', component: CourseListComponent }
        ]
    },
    {
        path: 'profile',
        component: LayoutComponent,
        children: [
            { path: '', component: ProfileComponent }
        ]
    },
    {
        path: 'create-user',
        component: LayoutComponent,
        children: [
            { path: '', component: SignupComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
