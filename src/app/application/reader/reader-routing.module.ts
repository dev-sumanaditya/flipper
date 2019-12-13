import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpubComponent } from './epub/epub.component';

const routes: Routes = [
    {path: '', component: EpubComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderRoutingModule { }