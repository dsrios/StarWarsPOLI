import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from './../../shared/services/people.service';
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  homeworld = '';
  especie = '';
  arrayfilms = [];

  @Input() datos;

  constructor( private peopleService: PeopleService ) { }

  ngOnInit() {
    
    // get homeworld name
    this.peopleService.getDataByURL(this.datos.homeworld).subscribe( (response: any) =>
      this.homeworld = response.name
    );

    // get especie
    this.peopleService.getDataByURL(this.datos.species[0]).subscribe( (response: any) =>
      this.especie = response.name
    );

    this.getAllFilms( this.datos.films );

    
  }

  getAllFilms( filmsArray ) {
    filmsArray.forEach( urlSpecie => {
      this.peopleService.getDataByURL(urlSpecie).subscribe( (response: any) =>
        this.arrayfilms.push( `EP: ${response.episode_id} - ${response.title}`)
      );
    });
  }

  urlImageFind( find ) {
    const characterName = find;
    const lowerCase = characterName.toLowerCase();
    const split = lowerCase.split(' ');
    const cleanName = split[0].replace(/[^\w\s]/gi, '');

    if (split[0] === 'darth') {
      return `http://www.facetheforce.today/${split[0]}${split[1]}/400`;
    } else {
      return `http://www.facetheforce.today/${cleanName}/400`;
    }
    // return `https://source.unsplash.com/random/?${cleanName}`;
  }



}
