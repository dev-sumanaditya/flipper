import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MylistComponent } from './mylist/mylist.component';
import { CollectionRoutingModule } from './collection-routing.module';
import { SharedModule } from 'src/app/application/shared/shared.module';

@NgModule({
  declarations: [MylistComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SharedModule
  ]
})
export class CollectionModule { }
