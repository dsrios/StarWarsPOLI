import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) {}

  URL = 'https://swapi.py4e.com/api/planets/';

  getDataByURL( url ) {
    return this.http.get(url);
  }

  getPlanetsById(id: number) {
    return this.http.get(`${this.URL}${id}`);
  }

  getAllPlanets(nextUrl: string) {
    nextUrl = nextUrl !== '' ? nextUrl : this.URL;
    return this.http.get(`${nextUrl}`);
  }
}