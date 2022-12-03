import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planet';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  planets: Planet[] = [];

  constructor(private dataService: DataService, private router: Router) {}
  routes: string[] = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
  ];
  ngOnInit(): void {
    this.planets = this.dataService.getPlanets();
    // this.planets = this.dataService.getPlanets();
    console.log(this.planets);
  }

  onPlanetClick(planet: any) {
    this.router.navigate([`/planets/${planet}`]);
  }

  getPlanetColor(planet: string) {
    switch (planet) {
      case 'Mercury':
        return '#DEF4FC';
      case 'Venus':
        return '#F7CC7F';
      case 'Earth':
        return '#545BFE';
      case 'Mars':
        return '#FF6A45';
      case 'Jupiter':
        return '#ECAD7A';
      case 'Saturn':
        return '#FCCB6B';
      case 'Uranus':
        return '#65F0D5';
      case 'Neptune':
        return '#497EFA';
      default:
        return '#DEF4FC';
    }
  }
}
