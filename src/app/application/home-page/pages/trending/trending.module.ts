import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TrendingRoutingModule } from './trending-routing.module';
import { SharedModule } from 'src/app/application/shared/shared.module';
import { PanelComponent } from './panel/panel.component';
import { GenreComponent } from './genre/genre.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [ListComponent, PanelComponent, GenreComponent],
  imports: [
    CommonModule,
    TrendingRoutingModule,
    SharedModule,
  ]
})
export class TrendingModule { }
