import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  listRoute!: string;
  registerRoute!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(segments => {
      const baseRoute = segments[0].path; 
      this.listRoute = `/${baseRoute}`; 
      this.registerRoute = `/${baseRoute}/register`;
    });
  }
}
