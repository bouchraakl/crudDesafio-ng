import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRegisterComponent } from './books-register.component';

describe('BooksRegisterComponent', () => {
  let component: BooksRegisterComponent;
  let fixture: ComponentFixture<BooksRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksRegisterComponent]
    });
    fixture = TestBed.createComponent(BooksRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
