import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_URL: string = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) { }

  listAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL + '/');
  }

  save(book: Book): Observable<Book> {
    return this.http.post<Book>(this.API_URL + '/', book);
  }
}
