import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { PlanetComponent } from './components/planet/planet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/planets/Earth' },
  // { path: '', component: HomeComponent },
  {
    path: 'planets',
    data: { animation: 'slideInAnimation' },
    children: [
      {
        path: ':id',
        component: PlanetComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
