import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from './cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  API: string = 'http://localhost:8080/carros';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.API + '/');
  }

  save(cars: Cars): Observable<Cars> {
    return this.http.post<Cars>(this.API + '/', cars);
  }

  update(cars: Cars): Observable<Cars> {
    return this.http.put<Cars>(this.API + '/' + cars.id, cars);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  loadById(id: number): Observable<Cars> {
    return this.http.get<Cars>(this.API + '/get/' + id);
  }


}
