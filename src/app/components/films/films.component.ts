//componente films David Orozco

import { Component, OnInit } from '@angular/core';
import { FilmsService } from './../../shared/services/films.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsResults: Array<any> = [];
  /* filmsResults: Observable<Film>=[]; */

  constructor( private filmsService: FilmsService ) { }

  ngOnInit() {
    this.getFilmsResults();
  }

  getFilmsResults() {
    let responseInfo;
    this.filmsService.getAllFilms().subscribe( ( response: IFilms) => {
      console.log('Results => ', response);
      responseInfo = response.results;
    },
    e => console.log('An error => ', e),
    () => {
      setTimeout(() => {
        this.filmsResults = responseInfo;
      }, 500);
    });
  }

}

export interface IFilms {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
}

