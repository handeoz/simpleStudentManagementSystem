import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];
// { path: '', redirectTo: '/login', pathMatch: 'full'},


@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
