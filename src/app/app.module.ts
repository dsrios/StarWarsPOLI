import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/card/card.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// Importar modulos de material
import { MatToolbar } from '@angular/material/toolbar';
import { MatSpinner } from '@angular/material/progress-spinner';


// Importar nuevos componentes
import { PeopleComponent } from './components/people/people.component';
import { FilmsComponent } from './components/films/films.component';
import { VehiclesComponent} from './components/vehicles/vehicles.component';

// Agregar el modulo de material que se vaya a usar
const MATERIAL_COMPONENTS = [
  MatToolbar,
  MatSpinner
];

// Importar servicio
import { PeopleService } from './shared/services/people.service';
import { FilmsService } from './shared/services/films.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { VehiclesService } from './shared/services/vehicles.service';

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
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
providers:[
PeopleService,
FilmsService,
VehiclesService],
 bootstrap: [AppComponent]
})
export class AppModule { }
