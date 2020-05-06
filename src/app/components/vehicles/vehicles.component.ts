import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/shared/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehiclesResults: Array<any> = [];
  imagesVehicles: string[];
  page =  true;
  pagina = 1;

  constructor(private vehiclesService: VehiclesService) { 
    this.imagesVehicles = ['./assets/imagesVehicles/','./assets/imagesVehicles/T-16skyhopper.png'];
  }

  ngOnInit() {
    this.getVehiclesResults();
  }

  getVehiclesResults() {
    let responseInfo;
    this.vehiclesService.getNextPage(this.pagina).subscribe( ( response: IVehicles) => {
      console.log('Results => ', response);
      responseInfo = response.results;
    },
    e => console.log('An error => ', e),
    () => {
      setTimeout(() => {
        
        this.vehiclesResults = responseInfo;
        this.vehiclesResults.map((obj) => {
          
          obj.img = './assets/imagesVehicles/'+ obj.name +'.png';
        });
      }, 500);
    });
  }


  siguiente_pagina(){
    console.log(this.pagina);
    this.pagina=this.pagina+1;
    console.log("actualizo pagina",this.pagina)
    this.getVehiclesResults();
  }

  anterior_pagina(){
    console.log(this.pagina);
    this.pagina=this.pagina-1;
    console.log("actualizo pagina",this.pagina)
    this.getVehiclesResults();
  }

}
export interface IVehicles {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
}