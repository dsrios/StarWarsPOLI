import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/card/card.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardSpecieComponent } from './shared/card-specie/card-specie.component';
import { CardFilmsComponent } from './shared/card-films/card-films.component';
import { CardStarshipsComponent } from './shared/card-starships/card-starships.component';
import { CardPlanetsComponent } from './shared/card-planets/card-planets.component';

// Importar modulos y componentes de material
import { MatToolbar } from '@angular/material/toolbar';
import { MatSpinner } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';




// Importar nuevos componentes
import { PeopleComponent } from './components/people/people.component';
import { FilmsComponent } from './components/films/films.component';
import { VehiclesComponent} from './components/vehicles/vehicles.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { PlanetsComponent } from './components/planets/planets.component';

// Agregar el componente de material que se vaya a usar
const MATERIAL_COMPONENTS = [
  MatToolbar,
  MatSpinner
];

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule
];

// Importar servicio
import { PeopleService } from './shared/services/people.service';
import { FilmsService } from './shared/services/films.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { VehiclesService } from './shared/services/vehicles.service';
import { SpeciesService } from './shared/services/species.service';
import { StarshipsService } from './shared/services/starships.service';
import { PlanetsService } from './shared/services/planets.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    MATERIAL_COMPONENTS,
    FilmsComponent,
    PeopleComponent,
    LoaderComponent,
    PlanetsComponent,
    VehiclesComponent,
    SpeciesComponent,
    CardSpecieComponent,
    StarshipsComponent,
    CardStarshipsComponent,
    CardFilmsComponent,
    CardPlanetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ],
providers:[
PeopleService,
FilmsService,
VehiclesService,
SpeciesService,
StarshipsService,
PlanetsService],
 bootstrap: [AppComponent]
})
export class AppModule { }
