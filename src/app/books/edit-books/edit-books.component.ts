import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.scss']
})
export class EditBooksComponent implements OnInit {
  id: number;
  book: Book = new Book();

  constructor(private route: ActivatedRoute, private bService: BookService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.bService.loadById(this.id).subscribe((book: Book) => {
      this.book = book;
    });
  }

  update() {
    this.bService.update(this.book).subscribe((updatedBook: Book) => {
      this.book = updatedBook;
    
    });
    
  }
}
