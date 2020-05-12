import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-starships',
  templateUrl: './card-starships.component.html',
  styleUrls: ['./card-starships.component.css']
})
export class CardStarshipsComponent implements OnInit {

  @Input() datos;

  constructor() { }

  ngOnInit() {
  }

  urlImageFind( find ) {
    const characterName = find;
    const lowerCase = characterName.toLowerCase();
    const split = lowerCase.split(' ');
    let cleanName = split[0].replace(/[^\w\s]/gi, '');
    if (cleanName === 'cr90') {
      return 'https://vignette.wikia.nocookie.net/starwars/images/4/47/Rebels-TantiveIVConceptArt-CroppedBackground.png/revision/latest?cb=20150215073634';
    } else if (cleanName === 'star') {
      return 'https://upload.wikimedia.org/wikipedia/en/d/d9/ImperialstarDestroyer480ppx.png';
    } else if (cleanName === 'sentinelclass') {
      return 'https://vignette.wikia.nocookie.net/starwars/images/6/6e/Sentinel_negvv.png/revision/latest?cb=20170411232732';
    } else if (cleanName === 'death') {
      return 'https://vignette.wikia.nocookie.net/starwars/images/9/9d/DSI_hdapproach.png/revision/latest/top-crop/width/360/height/450?cb=20130221005853';
    } else if (cleanName === 'millennium') {
      return 'https://vignette.wikia.nocookie.net/es.starwars/images/5/52/Millennium_Falcon_Fathead_TROS.png/revision/latest?cb=20191220220841'
    } else if (cleanName === 'ywing') {
      return 'https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C24%2C1536%2C768';
    } else if (cleanName === 'xwing') {
      return 'https://vignette.wikia.nocookie.net/es.starwars/images/8/80/X-wing_Fathead.png/revision/latest?cb=20190624005938';
    } else if (cleanName === 'tie') {
      return 'https://vignette.wikia.nocookie.net/es.starwars/images/e/ec/SWBF_TIE_Avanzado_x1.png/revision/latest?cb=20171212230520';
    } else if (cleanName === 'executor') {
      return 'https://vignette.wikia.nocookie.net/es.starwars/images/3/30/Executor_BF2.png/revision/latest?cb=20190810045012';
    } else if (cleanName === 'rebel') {
      return 'https://vignette.wikia.nocookie.net/es.starwars/images/e/eb/GR-75_Medium_Transport.jpg/revision/latest?cb=20100530190033';
    } else {
      return `http://www.facetheforce.today/${cleanName}/400`;
    }

  }
}
