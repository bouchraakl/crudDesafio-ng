import { Component } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.scss']
})
export class EditPeopleComponent {

  id: number;
  person:Person = new Person();

  constructor(private route: ActivatedRoute, private pService: PeopleService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.pService.loadById(this.id).subscribe((person: Person) => {
      this.person = person;
    });
  }

  update() {
    this.pService.update(this.person).subscribe((updatedPerson: Person) => {
      this.person = updatedPerson;
    });
  }
}
 