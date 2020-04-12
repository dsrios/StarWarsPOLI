import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../../shared/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleResults: Array<any> = [];

  constructor( private peopleService: PeopleService ) { }

  ngOnInit() {
    this.getPeopleResults();
  }

  getPeopleResults() {
    let responseInfo;
    this.peopleService.getAllPeople().subscribe( ( response: IPeople) => {
      console.log('Results => ', response);
      responseInfo = response.results;
    },
    e => console.log('An error => ', e),
    () => {
      setTimeout(() => {
        this.peopleResults = responseInfo;
      }, 500);
    });
  }

}

export interface IPeople {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
}
