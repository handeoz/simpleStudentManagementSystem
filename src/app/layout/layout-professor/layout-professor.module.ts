import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutProfessorRoutingModule } from './layout-professor-routing.module';
import { LayoutProfessorComponent } from './layout-professor/layout-professor.component';
import { LayoutModule } from '../layout.module';


@NgModule({
  declarations: [LayoutProfessorComponent],
    imports: [
        CommonModule,
        LayoutProfessorRoutingModule,
        LayoutModule
    ]
})
export class LayoutProfessorModule { }
