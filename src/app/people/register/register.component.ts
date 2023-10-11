import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Person } from '../person';
import { DataService } from 'src/app/data.service';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Input() people: Person = new Person();
  @Output() retorno = new EventEmitter<Person>();

  pService = inject(PeopleService);

  constructor() { }

  salvar() {
    this.pService.save(this.people).subscribe({
      next: c => {
        this.retorno.emit(this.people);
      },
      error: erro => {
        console.error(erro);
      }
    });
  }
}