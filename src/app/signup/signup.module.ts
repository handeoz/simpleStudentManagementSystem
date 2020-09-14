import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, TranslateModule, SignupRoutingModule, MatOptionModule, MatSelectModule, FormsModule],
    declarations: [SignupComponent]
})
export class SignupModule {}
