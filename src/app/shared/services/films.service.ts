import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })

export class FilmsService {
  constructor(private http: HttpClient) {}
  /* url: "https://swapi.co/api/films/" */
  URL = "https://swapi.py4e.com/api/films/";
  /**
   * /films/ -> get all the films resources
   * /films/:idEpisode/ -> get a specific films resource
   * /films/schema/ -> view the JSON schema for this resource
   * name -> Search Fields
   */

  getAllfilms() {
    return this.http.get(this.URL);
  }

  getfilmsById(idEpisode: number) {
    return this.http.get(`${this.URL}${ idEpisode}`);
  }

  getNextPage(nextUrl: string) {
    return this.http.get(`${nextUrl}`);
  }
}
