import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city.component';
import { TabMenuModule, MenuItem } from 'primeng/primeng';

@NgModule({
  imports: [
      CommonModule,
TabMenuModule
  ],
  declarations: [CityComponent]
})
export class CityModule { }
