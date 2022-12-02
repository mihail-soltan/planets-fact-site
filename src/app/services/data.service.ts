import { Injectable } from '@angular/core';
import { Planet } from '../interfaces/planet';
// import behaviour subjecty
import { BehaviorSubject } from 'rxjs';

import data from 'data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // create a behaviour subject
  private planetSource = new BehaviorSubject<Planet>({
    name: '',
    overview: {
      content: '',
      source: '',
    },
    structure: {
      content: '',
      source: '',
    },
    geology: {
      content: '',
      source: '',
    },
    rotation: '',
    revolution: '',
    radius: '',
    temperature: '',
    images: {
      planet: '',
      internal: '',
      geology: '',
    },
  });
  constructor() {}
  getPlanets() {
    return data;
  }
  getPlanet(name: string) {
    return data.filter((planet) => planet.name === name)[0];
  }

  // create a method to get the planet
  // getPlanet() {
  //   return this.planetSource.asObservable();
  // }

  // create a method to change the planet
  changePlanet(planet: Planet) {
    this.planetSource.next(planet);
  }
}
