import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/interfaces/planet';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  planetName: string = '';
  currentPlanet?: Planet;
  activeTab: string = 'overview';

  constructor(route: ActivatedRoute, private dataService: DataService) {
    route.params.subscribe((params) => {
      this.planetName = params["id"];
      // console.log(params);
      this.getPlanet(this.planetName);
    });
  }

  ngOnInit(): void {
    // this.getPlanet();
  }

  getPlanet(name: string) {
   this.currentPlanet = this.dataService.getPlanet(name)
  }

  getValue(e: any) {
    this.activeTab = e.target.value;
    console.log(this.activeTab);
  }
}
