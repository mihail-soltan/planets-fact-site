import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, pairwise, share, startWith } from 'rxjs';
import { slideInAnimation } from 'src/app/animations';
import { Planet } from 'src/app/interfaces/planet';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  animations: [slideInAnimation],
})
export class PlanetComponent implements OnInit {
  planetName: string = '';
  currentPlanet?: Planet;
  activeTab!: string;

  constructor(
    route: ActivatedRoute,
    private dataService: DataService,
  ) {
    route.params.subscribe((params) => {
      this.planetName = params['id'];
      this.getPlanet(this.planetName);
    });
  }

  ngOnInit(): void {
    this.activeTab = 'overview'
    // this.getPlanet();
  }

  getPlanet(name: string) {
    this.currentPlanet = this.dataService.getPlanet(name);
  }

  getValue(e: any) {
    this.activeTab = e.target.value;
  }
 
  updateDesktopTabs() {
    const overviewDesktopTab = document.getElementById('overview-desktop') as HTMLInputElement | null;
    const structureDesktopTab = document.getElementById('structure-desktop') as HTMLInputElement | null;
    const surfaceDesktopTab = document.getElementById('surface-desktop') as HTMLInputElement | null;
    overviewDesktopTab!.checked = this.activeTab === 'overview';
    structureDesktopTab!.checked = this.activeTab === 'structure';
    surfaceDesktopTab!.checked = this.activeTab === 'surface';
  }
}
