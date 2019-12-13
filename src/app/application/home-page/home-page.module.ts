import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';

import {HomePageRoutingModule} from './home-page-routing.module';

import {NgxPopperModule} from 'ngx-popper';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NgxPopperModule.forRoot({trigger: 'hover'}),
    InfiniteScrollModule
  ]
})
export class HomePageModule { }
