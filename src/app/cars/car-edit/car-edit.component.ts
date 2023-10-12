import { Component } from '@angular/core';
import { Cars } from '../cars';
import { CarsService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent {

  id:number;
  car:Cars = new Cars();

  constructor(private route: ActivatedRoute, private router: Router, private cService: CarsService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.cService.loadById(this.id).subscribe((car: Cars) => {
      this.car = car;
    });
  }

  update() {
    this.cService.update(this.car).subscribe((updatedCar: Cars) => {
      this.car = updatedCar;
      this.router.navigate(['/cars']);
    });
  }

}
