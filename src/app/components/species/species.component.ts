import { Component, OnInit } from '@angular/core';
import { SpeciesService } from 'src/app/shared/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  speciesResults: Array<any> = [];
  allSpeciesResults = [];
  urlSearch = '';
  allDataCompleted = false;
  page = 0;

  constructor(private speciesService: SpeciesService) { }

  ngOnInit() {

    this.getAllSpecices();
    console.log('Finally script', this.allSpeciesResults);
  }

  getAllSpecices(){
    let responseInfo: any = [];
    this.speciesService.getAllSpecies(this.urlSearch).subscribe(
      (response: ISpecie) => {
        responseInfo = response;
      },
      (e) => console.log('An error => ', e),
      () => {
        if (responseInfo.next !== null) {
          this.urlSearch = responseInfo.next;
          this.allSpeciesResults.push(responseInfo.results);
          this.getAllSpecices();
        } else {
          this.urlSearch = '';
          this.allSpeciesResults.push(responseInfo.results);
          this.allDataCompleted = true;
        }
      }
    );
  }
}

export interface ISpecie {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
}

