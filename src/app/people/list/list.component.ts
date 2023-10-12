import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data: any[] = [];
  tableHeaders: string[] = [];

  constructor(private pService: PeopleService) { }

  ngOnInit(): void {
    this.pService.listAll().subscribe((response: any[]) => {
      this.data = response;
    });
  }

  edit(){

  }

  delete(id: number) {
    this.pService.delete(id).subscribe((response: any) => {
      this.data = this.data.filter((item: any) => item.id !== id);
    });
  }

}
