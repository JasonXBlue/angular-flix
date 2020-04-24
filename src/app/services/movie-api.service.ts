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
      .get<any>(this.MOVIE_URL + "?api_key=" + this.API_KEY + "&query=" + query)
      .toPromise();
  }
}
