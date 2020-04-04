import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list.component';
import { UserDetailComponent } from './users/user-detail.component';
import { UserDetailReactiveComponent } from './users/user-detail-reactive.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id/edit', component: UserDetailComponent },
  { path: 'users/:id/editReactive', component: UserDetailReactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
