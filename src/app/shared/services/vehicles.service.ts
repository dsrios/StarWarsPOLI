import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})


export class VehiclesService {

  constructor(private http: HttpClient) { }

  URL = "https://swapi.py4e.com/api/vehicles/";

  //comentar

  getAllVehicles() {
    return this.http.get(this.URL);
  }

  getVehiclesById(id: number) {
    return this.http.get(`${this.URL}${id}`);
  }

  getNextPage(pagina: number) {
    //ext": "http://swapi.py4e.com/api/vehicles/?page=2"
    return this.http.get(`${this.URL}?page=${pagina}`);
  }
}