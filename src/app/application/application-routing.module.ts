import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'reader', loadChildren: './reader/reader.module#ReaderModule'},
    {path: 'user', loadChildren: './profile-selector/profile-selector.module#ProfileSelectorModule'},
    {path: '', loadChildren: './home-page/home-page.module#HomePageModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }