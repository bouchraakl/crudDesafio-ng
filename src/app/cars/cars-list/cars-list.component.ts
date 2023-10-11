import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  data: any[] = [];
  tableHeaders: string[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.listAll().subscribe((response: any[]) => {
      this.data = response;
    });
  }

  
  editar() {}
  deletar() {}

}
