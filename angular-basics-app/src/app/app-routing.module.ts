import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list.component';
import { UserDetailComponent } from './users/user-detail.component';


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'users/:id/edit', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
