import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../shared/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planetsResults: Array<any> = [];
  allPlanetsResults = [];
  urlSearch = '';
  allDataCompleted = false;
  page = 0;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.getAllPlanets();
    console.log('Finally script', this.allPlanetsResults);
  }

  getAllPlanets(){
    let responseInfo: any = [];
    this.planetsService.getAllPlanets(this.urlSearch).subscribe(
      (response: IPlanets) => {
        responseInfo = response;
      },
      (e) => console.log('An error => ', e),
      () => {
        if (responseInfo.next !== null) {
          this.urlSearch = responseInfo.next;
          this.allPlanetsResults.push(responseInfo.results);
          this.getAllPlanets();
        } else {
          this.urlSearch = '';
          this.allPlanetsResults.push(responseInfo.results);
          this.allDataCompleted = true;
        }
      }
    );
  }

}

export interface IPlanets {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
}
