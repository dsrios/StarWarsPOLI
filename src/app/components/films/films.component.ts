//componente films David Orozco

import { Component, OnInit } from '@angular/core';
import { FilmsService } from './../../shared/services/films.service';
import { Observable } from 'rxjs';
/* import { FilmsModel } from './../../films/model/films-model'; */

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsResults: Array<any> = [];
  /* filmsResults: Observable<Film>=[]; */
   allfilmsResults = [];
  urlSearch = '';
  allDataCompleted = false;
  page = 0;


  constructor( private filmsService: FilmsService ) { }

  ngOnInit() {
    this.getFilmsResults();
    /* this.getAllFilms();
    console.log('Finally script', this.allFilmsResults); */
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

/* getAllFilms() {
    let responseInfo: any = [];
    this.filmsService.getAllFilms(this.urlSearch).subscribe(
      (response: IFilms) => {
        responseInfo = response;
      },
      (e) => console.log('An error => ', e),
      () => {
        if (responseInfo.next !== null) {
          this.urlSearch = responseInfo.next;
          this.allFilmsResults.push(responseInfo.results);
          this.getAllFilms();
        } else {
          this.urlSearch = '';
          this.allFilmsResults.push(responseInfo.results);
          this.allDataCompleted = true;
        }
      }
    );
  } */
}
export interface IFilms {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
}

