import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { PlanetComponent } from './components/planet/planet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/planets/Earth' },
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
  { path: '**', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '/404' },
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
