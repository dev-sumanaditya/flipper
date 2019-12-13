import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PanelComponent } from './panel/panel.component';
import { GenreComponent } from './genre/genre.component';

const routes: Routes = [
    {path: '', component: PanelComponent, children: [
        {path: 'genre', component: GenreComponent},
        {path: '', component: ListComponent}
    ]},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TrendingRoutingModule {}