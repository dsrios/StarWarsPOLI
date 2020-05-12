import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../../shared/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starshipsResults: Array<any> = [];
  allStarshipsResults = [];
  urlSearch = '';
  allDataCompleted = false;
  page = 0;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit() {
    this.getAllStarships();
    console.log('Finally script', this.allStarshipsResults);
  }

  getAllStarships(){
    let responseInfo: any = [];
    this.starshipsService.getAllStarships(this.urlSearch).subscribe(
      (response: IStarships) => {
        responseInfo = response;
      },
      (e) => console.log('An error => ', e),
      () => {
        if (responseInfo.next !== null) {
          this.urlSearch = responseInfo.next;
          this.allStarshipsResults.push(responseInfo.results);
          this.getAllStarships();
        } else {
          this.urlSearch = '';
          this.allStarshipsResults.push(responseInfo.results);
          this.allDataCompleted = true;
        }
      }
    );
  }

}

export interface IStarships {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
}
