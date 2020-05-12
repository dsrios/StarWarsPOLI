import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  constructor(private http: HttpClient) { }

  URL = 'https://swapi.py4e.com/api/species/';

  getDataByURL( url ) {
    return this.http.get(url);
  }

  getSpecieById(id: number) {
    return this.http.get(`${this.URL}${id}`);
  }

  getAllSpecies(nextUrl: string) {
    nextUrl = nextUrl !== '' ? nextUrl : this.URL;
    return this.http.get(`${nextUrl}`);
  }

}
