import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieApiService {
  private MOVIE_URL = "https://api.themoviedb.org/3/";

  constructor(private httpClient: HttpClient) {}

  async get() {
    // return this.httpClient.get<IBeer[]>(this.MOVIE_URL).toPromise();
    // This service has one more responsiblity than we have not seen before. It must append the api key to every request. &api_key=yourkey. Just hard code this in the get method.
  }
}
