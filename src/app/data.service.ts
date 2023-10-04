import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from './list/person';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private peopleListSubject = new BehaviorSubject<Person[]>([]);
  peopleList$ = this.peopleListSubject.asObservable();

  addPerson(newPerson: Person) {
    const currentList = this.peopleListSubject.value;
    currentList.push(newPerson);
    this.peopleListSubject.next(currentList);
  }
}
