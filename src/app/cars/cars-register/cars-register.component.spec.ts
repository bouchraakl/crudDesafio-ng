import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsRegisterComponent } from './cars-register.component';

describe('CarsRegisterComponent', () => {
  let component: CarsRegisterComponent;
  let fixture: ComponentFixture<CarsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsRegisterComponent]
    });
    fixture = TestBed.createComponent(CarsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
