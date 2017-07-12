import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { STORE_ROUTES } from './store.routing';
import { DataGridModule, ButtonModule, PanelModule, DialogModule } from 'primeng/primeng';


@NgModule({
  imports: [
      CommonModule,
BrowserAnimationsModule,
      ButtonModule,
      DataGridModule,
      DialogModule,
      PanelModule,
      STORE_ROUTES
  ],
  declarations: [StoreComponent]
})
export class StoreModule { }
