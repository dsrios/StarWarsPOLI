import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../../shared/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleResults: Array<any> = [];

  allPeopleResults = [];
  urlSearch = '';
  allDataCompleted = false;
  page = 0;

  constructor( private peopleService: PeopleService ) { }

  ngOnInit() {
    this.getAllPeople();
    console.log('Finally script', this.allPeopleResults);
  }

getAllPeople() {
    let responseInfo: any = [];
    this.peopleService.getAllPeople(this.urlSearch).subscribe(
      (response: IPeople) => {
        responseInfo = response;
      },
      (e) => console.log('An error => ', e),
      () => {
        if (responseInfo.next !== null) {
          this.urlSearch = responseInfo.next;
          this.allPeopleResults.push(responseInfo.results);
          this.getAllPeople();
        } else {
          this.urlSearch = '';
          this.allPeopleResults.push(responseInfo.results);
          this.allDataCompleted = true;
        }
      }
    );
  }
}

export interface IPeople {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
}
