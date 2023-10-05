import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from './people/person';
import { Cars } from './cars/cars';
import { Book } from './books/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private peopleListSubject = new BehaviorSubject<Person[]>([]);
  peopleList$ = this.peopleListSubject.asObservable();

  private carsListSubject = new BehaviorSubject<Cars[]>([]);
  carsList$ = this.carsListSubject.asObservable();

  private booksListSubject = new BehaviorSubject<Book[]>([]);
  booksList$ = this.booksListSubject.asObservable();

  addPerson(newPerson: Person) {
    const currentList = this.peopleListSubject.value;
    currentList.push(newPerson);
    this.peopleListSubject.next(currentList);
  }

  addCar(newCar: Cars) {
    const currentList = this.carsListSubject.value;
    currentList.push(newCar);
    this.carsListSubject.next(currentList);
  }

  addBook(newBook: Book) {
    const currentList = this.booksListSubject.value;
    currentList.push(newBook);
    this.booksListSubject.next(currentList);
  }
}
