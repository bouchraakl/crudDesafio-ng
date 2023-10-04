import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  peopleList: Person[] = [];
  showAgeAbove30: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.peopleList$.subscribe(list => {
      this.peopleList = list;
    });
  }
}
