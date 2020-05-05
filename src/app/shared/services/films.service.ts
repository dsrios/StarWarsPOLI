//Servicio films David Orozco
import { Injectable } from "@angular/core";
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
/* import { MdDialog } from '@angular/material'; */
import { Sort } from '@angular/material';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class FilmsService {
  constructor(private http: HttpClient) {}

  URL = "https://swapi.py4e.com/api/films/";
  /**
   * /films/ -> get all the films resources
   * /films/:id/ -> get a specific films resource
   * /films/schema/ -> view the JSON schema for this resource
   * name -> Search Fields
   */

 /*  getDataByURL( url ) {
	     return this.http.get(url);
  return this.http.get(`${this.URL}${id}?format=json`).pipe(
                catchError(this.handleError)
              );
  }
  
  getFilmsById(id: number){
    return this.http.get(`${this.URL}${id}?format=json`).pipe(
                catchError(this.handleError)
              );
  }

getAllFilms(nextUrl: string) {
    nextUrl = nextUrl !== '' ? nextUrl : this.URL;
    return this.http.get(`${nextUrl}`);
  } */
  
  
  getAllFilms() {
    return this.http.get(this.URL);
  }

  getFilmsById(id: number){
    return this.http.get(`${this.URL}${id}?format=json`).pipe(
                catchError(this.handleError)
              );
  }

  getNextPage(nextUrl: string) {
    return this.http.get(`${nextUrl}`);
  }
  
   /**
   * Handle HTTP Errors
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(`${this.URL} An error occurred:`, error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `${this.URL} Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      `${this.URL} Something bad happened; please try again later.`);
  }

}
