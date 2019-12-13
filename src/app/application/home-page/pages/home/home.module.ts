import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';

import { HomeRoutingModule } from './home-routing.module';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from 'src/app/application/shared/shared.module';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    SharedModule,
  ]
})
export class HomeModule { }
