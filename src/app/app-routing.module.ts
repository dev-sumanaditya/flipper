import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'en', loadChildren: './application/application.module#ApplicationModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: '', loadChildren: './landing/landing.module#LandingModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
