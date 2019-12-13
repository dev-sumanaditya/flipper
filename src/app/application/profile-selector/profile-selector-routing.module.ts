import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';

import {UsersComponent} from './components/users/users.component';
import {ManageComponent} from './components/manage/manage.component';
import {EditComponent} from './components/edit/edit.component';


const routes: Routes = [
    {path: '', component: PageComponent, children: [
        {path: 'manage', component: ManageComponent},
        {path: 'edit', component: EditComponent},
        {path: '', component: UsersComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileSelectorRoutingModule {}