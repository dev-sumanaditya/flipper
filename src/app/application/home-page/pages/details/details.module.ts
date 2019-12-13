import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import { DefaultComponent } from './default/default.component';

import { SharedModule } from 'src/app/application/shared/shared.module';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ]
})
export class DetailsModule { }
