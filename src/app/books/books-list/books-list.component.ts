import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  data: any[] = [];
  tableHeaders: string[] = [];

  constructor(private bService:BookService) { }

  ngOnInit(): void {
    this.bService.listAll().subscribe((response: any[]) => {
      this.data = response;
    });
  }

  delete(id: number): void {
    this.data = this.data.filter(item => item.id !== id);
    this.bService.delete(id).subscribe();
  }


}
