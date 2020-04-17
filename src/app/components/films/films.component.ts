//componente films

import { Component, OnInit } from '@angular/core';
import { FilmsService } from './../../shared/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsResults: Array<any> = [];

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

