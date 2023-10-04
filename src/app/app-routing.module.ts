import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './layout/people/list/list.component';
import { RegisterComponent } from './layout/people/register/register.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
