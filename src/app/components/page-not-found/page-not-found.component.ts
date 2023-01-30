import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  route: any;
  constructor(route: ActivatedRoute) {
    this.route = route.snapshot.url[0].path;
   }

  ngOnInit(): void {
    console.log(this.route)
  }

}
