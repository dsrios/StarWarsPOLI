//componente films David Orozco nueva version

import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../shared/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

 filmsResults: Array<any> = [];
 allFilmsResults = [];
  urlSearch = '';
  allDataCompleted = false;
  page = 0;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.getAllFilms();
    console.log('Finally script', this.allFilmsResults);
  }

  getAllFilms(){
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
  }

}

export interface IFilms{
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
}

