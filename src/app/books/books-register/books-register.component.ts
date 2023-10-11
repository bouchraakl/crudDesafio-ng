import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Book } from '../book';
import { DataService } from 'src/app/data.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-register',
  templateUrl: './books-register.component.html',
  styleUrls: ['./books-register.component.scss']
})
export class BooksRegisterComponent {
  @Input() book: Book = new Book();
  @Output() retorno = new EventEmitter<Book>();

  bService = inject(BookService);

  constructor() { }

  salvar() {
    this.bService.save(this.book).subscribe({
      next: c => {
        this.retorno.emit(this.book);
      },
      error: erro => {
        console.error(erro);
      }
    });
  }
}
