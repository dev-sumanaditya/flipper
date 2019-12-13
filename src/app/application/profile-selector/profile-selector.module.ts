import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ProfileSelectorRoutingModule} from './profile-selector-routing.module';
import { UsersComponent } from './components/users/users.component';
import { ManageComponent } from './components/manage/manage.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [PageComponent, UsersComponent, ManageComponent, EditComponent],
  imports: [
    CommonModule,
    ProfileSelectorRoutingModule
  ]
})
export class ProfileSelectorModule { }
