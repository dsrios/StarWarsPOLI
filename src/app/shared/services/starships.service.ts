import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  URL = 'https://swapi.py4e.com/api/starships/';

  getDataByURL( url ) {
    return this.http.get(url);
  }

  getStarshipsById(id: number) {
    return this.http.get(`${this.URL}${id}`);
  }

  getAllStarships(nextUrl: string) {
    nextUrl = nextUrl !== '' ? nextUrl : this.URL;
    return this.http.get(`${nextUrl}`);
  }
}
