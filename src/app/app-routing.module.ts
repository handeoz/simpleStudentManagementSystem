import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './shared/guard';

const routes: Routes = [
/*    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
        canActivate: [AuthGuard]
    },*/
    { path: '', redirectTo: '/login', pathMatch: 'full'},

    { path: 'login',
        canActivate: [],
        loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
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
    // { path: 'dashboard', redirectTo: '/layout', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
