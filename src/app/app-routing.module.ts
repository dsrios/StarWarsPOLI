import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes

import { PeopleComponent } from './components/people/people.component';
import {PlanetsComponent}from './components/planets/planets.component';
import { FilmsComponent } from './components/films/films.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'films', component: FilmsComponent },
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
