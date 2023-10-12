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

  loadById(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_URL + '/get/' + id);
  }

  save(book: Book): Observable<Book> {
    return this.http.post<Book>(this.API_URL + '/', book);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(this.API_URL + '/' + book.id, book);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API_URL + '/' + id);
  }
}
