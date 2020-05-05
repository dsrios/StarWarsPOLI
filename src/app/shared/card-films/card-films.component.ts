import { Component, OnInit, Input } from '@angular/core';
import { FilmsService } from './../../shared/services/films.service';
import { first } from 'rxjs/operators';

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
    /* if (cleanTitle === 'A New Hope') {
            return './assets/imgMovie/a new hope.jpg';
    } else if (cleanTitle === 'The Empire Strikes Back') {
          return './assets/imgMovie/the empire strikes back.jpg';
    } else if (cleanTitle === 'Return of the Jedi') {
         return './assets/imgMovie/return of the jedi.jpg';
    } else if (cleanTitle === 'The Phantom Menace') {
         return './assets/imgMovie/the phantom menace.jpg';
    } else if (cleanTitle === 'Attack of the Clones') {
        return './assets/imgMovie/attack of the clones.jpg';
    } else if (cleanTitle === 'Revenge of the Sith') {
         return './assets/imgMovie/revenge of the sith.jpg';
    } else if (cleanTitle === 'The Force Awakens') {
       return './assets/imgMovie/the force awakens.jpg';
    } else if (cleanTitle === 'the last jedi') {
        return `./assets/imgMovie/the-last-jedi.jpg`;
    } else if (cleanTitle === 'the rise of skywalker') {
         return `./assets/imgMovie/the-rise-of-skywalker.jpg`;
    }  else {
	       return `http://www.facetheforce.today/${cleanTitle}/400`;
    }  
  } */ 
  switch (find) {
    case ('A New Hope'):
        return './assets/imgMovie/a new hope.jpg';
        break;
    case ('The Empire Strikes Back'):
      return './assets/imgMovie/the empire strikes back.jpg';
        break;
    case ('Return of the Jedi'):
      return './assets/imgMovie/return of the jedi.jpg';
        break;
    case ('The Phantom Menace'):
           return './assets/imgMovie/the phantom menace.jpg';
        break;
    case ('Attack of the Clones'):
       return './assets/imgMovie/attack of the clones.jpg';
        break;
    case ('Revenge of the Sith'):
           return './assets/imgMovie/revenge of the sith.jpg';
        break;
    case ('The Force Awakens'):
        return './assets/imgMovie/the force awakens.jpg';
        break;
	case ('the last jedi') :
        return './assets/imgMovie/the-last-jedi.jpg';
        break;
	case ('the rise of skywalker'):
        return './assets/imgMovie/the-rise-of-skywalker.jpg';
        break
    default:
        return `http://www.facetheforce.today/${cleanTitle}/400`;
        break;
}
}
}