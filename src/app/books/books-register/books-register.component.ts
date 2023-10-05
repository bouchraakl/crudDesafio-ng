import { Component } from '@angular/core';
import { Book } from '../book';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-books-register',
  templateUrl: './books-register.component.html',
  styleUrls: ['./books-register.component.scss']
})
export class BooksRegisterComponent {
  newBook: Book = { title: '', author: ''};

  constructor(private dataService: DataService) {}

  registerBooks() {
    this.dataService.addBook(this.newBook);
    this.newBook = { title: '', author: '' }; 
  }
}
