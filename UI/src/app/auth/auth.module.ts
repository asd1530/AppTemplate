import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Auth } from './auth.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [Auth],
    declarations: [LoginComponent]
})
export class AuthModule { }
