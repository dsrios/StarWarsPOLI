import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-films',
  templateUrl: './card-films.component.html',
  styleUrls: ['./card-films.component.css']
})
export class CardFilmsComponent implements OnInit {

  @Input() datos;

  constructor() { }

  ngOnInit() {
  }

  urlImageFind( find ) {
    const characterTitle = find;
    const lowerCase = characterTitle.toLowerCase();
    const split = lowerCase.split(' ');
    let cleanTitle = split[0].replace(/[^\w\s]/gi, '');
	/* let imagesArray = ["./assets/imgMovie/a new hope.jpg", "./assets/imgMovie/attack of the clones.jpg","./assets/imgMovie/the phantom menace.jpg", "./assets/imgMovie/revenge of-the sith.jpg", "./assets/imgMovie/return of the jedi.jpg","./assets/imgMovie/the empire strikes back.jpg", "./assets/imgMovie/the force awakens.jpg"]
    let imgMovie = imagesArray[i]; */
	
    if (cleanTitle === 'A New Hope') {
       return ``;
    } else if (cleanTitle === 'The Empire Strikes Back') {
         return ``;
    } else if (cleanTitle === 'Return of the Jedi') {
        return ``;
    } else if (cleanTitle === 'The Phantom Menace') {
        return ``;
    } else if (cleanTitle === 'Attack of the Clones') {
        return ``;
    } else if (cleanTitle === 'Revenge of the Sith') {
         return ``;
    } else if (cleanTitle === 'The Force Awakens') {
      return ``;
    } else if (cleanTitle === 'the last jedi') {
        return ``;
    } else if (cleanTitle === 'the rise of skywalker') {
         return ``;
    }  else {
	       return `http://www.facetheforce.today/${cleanTitle}/400`;
    }  
  }
}
