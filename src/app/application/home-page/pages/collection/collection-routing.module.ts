import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MylistComponent } from './mylist/mylist.component';

const routes: Routes = [
    {path: '', component: MylistComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CollectionRoutingModule {}