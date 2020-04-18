import { Injectable } from "@angular/core";
/* import { HttpClient } from "@angular/common/http"; */
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class FilmsService {
  constructor(private http: HttpClient) {}

  URL = "https://swapi.py4e.com/api/films/";
  /**
   * /people/ -> get all the people resources
   * /people/:id/ -> get a specific people resource
   * /people/schema/ -> view the JSON schema for this resource
   * name -> Search Fields
   */

  getAllFilms() {
    return this.http.get(this.URL);
  }

  getFilmsById(id: number) {
    return this.http.get(`${this.URL}${id}`);
  }

  getNextPage(nextUrl: string) {
    return this.http.get(`${nextUrl}`);
  }
}
