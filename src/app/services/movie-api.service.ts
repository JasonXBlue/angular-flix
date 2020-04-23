import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieApiService {
  readonly MOVIE_URL = "https://api.themoviedb.org/3/search/movie";
  readonly API_KEY = "86349e5949a91b85a4a770eb1ab601e8";
  constructor(private httpClient: HttpClient) {}

  get(query: string): any {
    return this.httpClient
      .get("${this.MOVIE_URL}/?api_key=${this.API_KEY}&query=${query}")
      .toPromise();

    // return this.httpClient.get<IBeer[]>(this.MOVIE_URL).toPromise();
    // This service has one more responsiblity than we have not seen before. It must append the api key to every request. &api_key=yourkey. Just hard code this in the get method.
  }
}
