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

  getNextPage(nextUrl: string) {
    return this.http.get(`${nextUrl}`);
  }
}