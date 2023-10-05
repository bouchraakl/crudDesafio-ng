import { Component } from '@angular/core';
import { Cars } from '../cars';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cars-register',
  templateUrl: './cars-register.component.html',
  styleUrls: ['./cars-register.component.scss']
})
export class CarsRegisterComponent {
  newCars: Cars = { name: '', year: 0};

  constructor(private dataService: DataService) {}

  registerCars() {
    this.dataService.addCar(this.newCars);
    this.newCars = { name: '', year: 0 }; 
  }
}
