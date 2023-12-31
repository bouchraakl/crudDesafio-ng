import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private API_URL: string = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  listAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.API_URL + '/');
  }

  save(person: Person): Observable<Person> {
    return this.http.post<Person>(this.API_URL + '/', person);
  }

  update(person: Person): Observable<Person> {
    return this.http.put<Person>(this.API_URL + '/' + person.id, person);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API_URL + '/' + id);
  }

  loadById(id: number): Observable<Person> {
    return this.http.get<Person>(this.API_URL + '/get/' + id);
  }
}