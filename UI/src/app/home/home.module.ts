import { HOME_ROUTES } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HOME_ROUTES
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
