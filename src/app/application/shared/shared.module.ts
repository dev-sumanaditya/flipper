import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListComponent } from '../home-page/pages/home/components/book-list/book-list.component';

import {NgxPopperModule} from 'ngx-popper';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    NgxPopperModule,
    RouterModule
  ],
  exports:[
    BookListComponent,
    NgxPopperModule,
    RouterModule
  ]
})

export class SharedModule { }
