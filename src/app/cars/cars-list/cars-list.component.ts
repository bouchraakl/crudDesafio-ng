import { Component } from '@angular/core';
import { Cars } from '../cars';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  carsList: Cars[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.carsList$.subscribe(list => {
      this.carsList = list;
    });
  }
}
