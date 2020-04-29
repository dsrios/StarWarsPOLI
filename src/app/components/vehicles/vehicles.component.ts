import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/shared/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehiclesResults: Array<any> = [];

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.getVehiclesResults();
  }

  getVehiclesResults() {
    let responseInfo;
    this.vehiclesService.getAllVehicles().subscribe( ( response: IVehicles) => {
      console.log('Results => ', response);
      responseInfo = response.results;
    },
    e => console.log('An error => ', e),
    () => {
      setTimeout(() => {
        this.vehiclesResults = responseInfo;
      }, 500);
    });
  }

}
export interface IVehicles {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
}