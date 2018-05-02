import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {NgModule} from '@angular/core';
import {UsersStartComponent} from './users/users-start/users-start.component';
import {UserdetailComponent} from './users/userdetail/userdetail.component';
import {UsersEditComponent} from './users/users-edit/users-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent, children: [
      {path: '', component: UsersStartComponent },
      {path: 'new', component: UsersEditComponent},
      {path: ':id', component: UserdetailComponent},
      {path: ':id/edit', component: UsersEditComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
