import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cars } from '../cars';
import { DataService } from 'src/app/data.service';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-register',
  templateUrl: './cars-register.component.html',
  styleUrls: ['./cars-register.component.scss']
})
export class CarsRegisterComponent {


  @Input() carros: Cars = new Cars();
  @Output() retorno = new EventEmitter<Cars>();

  carsService = inject(CarsService);

  constructor() { }

  salvar() {
    this.carsService.save(this.carros).subscribe({
      next: c => {
        this.retorno.emit(this.carros);
      },
      error: erro => {
        console.error(erro);
      }
    });
  }

}
