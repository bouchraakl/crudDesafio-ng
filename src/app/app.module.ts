import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { ListComponent } from './people/list/list.component';
import { RegisterComponent } from './people/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsRegisterComponent } from './cars/cars-register/cars-register.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksRegisterComponent } from './books/books-register/books-register.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    CarsListComponent,
    CarsRegisterComponent,
    BooksListComponent,
    BooksRegisterComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
