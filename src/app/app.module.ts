import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/card/card.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// Importar modulos de material
import { MatToolbar } from '@angular/material/toolbar';
import { FilmsComponent } from './components/films/films.component';
import { PeopleComponent } from './components/people/people.component';

const MATERIAL_COMPONENTS = [
  MatToolbar
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    MATERIAL_COMPONENTS,
    FilmsComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
