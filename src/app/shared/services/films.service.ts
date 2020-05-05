//Servicio films David Orozco Nueva version

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  URL = 'https://swapi.py4e.com/api/films/';

  getDataByURL( url ) {
    return this.http.get(url);
  }

  getFilmsById(id: number) {
    return this.http.get(`${this.URL}${id}`);
  }

  getAllFilms(nextUrl: string) {
    nextUrl = nextUrl !== '' ? nextUrl : this.URL;
    return this.http.get(`${nextUrl}`);
  }
}

