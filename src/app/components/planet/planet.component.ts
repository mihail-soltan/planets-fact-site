import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  planetName: string = 'hello';

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.planetName = params["id"];
      console.log(params);
    });
  }

  ngOnInit(): void {
  }
}
