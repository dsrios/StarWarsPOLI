import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class PeopleService {
  constructor(private http: HttpClient) {}

  URL = "https://swapi.py4e.com/api/people/";
  /**
   * /people/ -> get all the people resources
   * /people/:id/ -> get a specific people resource
   * /people/schema/ -> view the JSON schema for this resource
   * name -> Search Fields
   */

  getAllPeople() {
    return this.http.get(this.URL);
  }

  getPeopleById(id: number) {
    return this.http.get(`${this.URL}${id}`);
  }

  getNextPage(nextUrl: string) {
    return this.http.get(`${nextUrl}`);
  }
}
