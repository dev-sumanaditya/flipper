import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { BuyRoutingModule } from './buy-routing.module';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    BuyRoutingModule,
  ]
})
export class BuyModule { }
