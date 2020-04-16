import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes

import { FilmsComponent } from './components/films/films.component';
import { PeopleComponent } from './components/people/people.component';
import {PlanetsComponent}from './components/planets/planets.component';

const routes: Routes = [
  //{ path: 'films', component: AppComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  // { path: 'species', component: AppComponent },
  // { path: 'starships', component: AppComponent },
  // { path: 'vehicles', component: AppComponent },
  { path: '',
    redirectTo: '/films',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
