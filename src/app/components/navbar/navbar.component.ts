import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('menuBtn') menuBtn: any;
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
  }

  onPlanetClick(planet: any) {
    this.router.navigate([`/planets/${planet}`]);
    this.menuBtn.nativeElement.checked = false;
  }
}
