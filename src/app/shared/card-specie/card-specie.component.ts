import { Component, OnInit, Input  } from '@angular/core';
import { SpeciesService } from '../services/species.service';

@Component({
  selector: 'app-card-specie',
  templateUrl: './card-specie.component.html',
  styleUrls: ['./card-specie.component.css']
})
export class CardSpecieComponent implements OnInit {

  @Input() datos;

  constructor(private specieService: SpeciesService) { }

  ngOnInit() {

  }

  urlImageFind( find ) {
    const characterName = find;
    const lowerCase = characterName.toLowerCase();
    const split = lowerCase.split(' ');
    let cleanName = split[0].replace(/[^\w\s]/gi, '');

    if (cleanName === 'human') {
      cleanName = 'luke';
    } else if (cleanName === 'droid') {
      cleanName = 'c3po';
    } else if (cleanName === 'wookiee') {
      cleanName = 'chewbacca-alt';
    } else if (cleanName === 'rodian') {
      cleanName = 'greedo';
    } else if (cleanName === 'hutt') {
      cleanName = 'jaba';
    } else if (cleanName === 'yodas') {
      cleanName = 'yoda';
    } else if (cleanName === 'yodas') {
      cleanName = 'yoda';
    } 
    return `http://www.facetheforce.today/${cleanName}/400`;
  }
}