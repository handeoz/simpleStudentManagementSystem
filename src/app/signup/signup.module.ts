import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignupRoutingModule } from './signup-routing.module';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';

@NgModule({
    imports: [CommonModule, SignupRoutingModule, MatOptionModule, MatSelectModule, FormsModule, NgbModule],
    providers: [PopupService]
})
export class SignupModule {}
