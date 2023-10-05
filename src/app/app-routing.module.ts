import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './people/list/list.component';
import { RegisterComponent } from './people/register/register.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsRegisterComponent } from './cars/cars-register/cars-register.component';
import { MainComponent } from './main/main.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksRegisterComponent } from './books/books-register/books-register.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cars', component: CarsListComponent },
  { path: 'cars/register', component: CarsRegisterComponent },  
  { path: 'people', component: ListComponent },
  { path: 'people/register', component: RegisterComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'books/register', component: BooksRegisterComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
