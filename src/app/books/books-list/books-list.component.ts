import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Book } from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  booksList: Book[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.booksList$.subscribe(list => {
      this.booksList = list;
    });
  }
}
