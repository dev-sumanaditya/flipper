import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularEpubViewerModule } from 'angular-epub-viewer';
import { EpubComponent } from './epub/epub.component';
import { ReaderRoutingModule } from './reader-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EpubComponent],
  imports: [
    CommonModule,
    AngularEpubViewerModule,
    ReaderRoutingModule,
    FormsModule
  ]
})
export class ReaderModule { }
