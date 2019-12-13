import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
    {path: '', component: PanelComponent, children: [
        {path: 'details', loadChildren: './pages/details/details.module#DetailsModule'},
        {path: 'categories', loadChildren: './pages/trending/trending.module#TrendingModule'},
        {path: 'library', loadChildren: './pages/collection/collection.module#CollectionModule'},
        {path: 'buy', loadChildren: './pages/buy/buy.module#BuyModule'},
        {path: '', loadChildren: './pages/home/home.module#HomeModule'}
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomePageRoutingModule {}