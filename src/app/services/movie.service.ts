import { Injectable } from "@angular/core";
import { MovieApiService } from "../services/movie-api.service";
import { ApiService } from "../services/api.service";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  searchResults = [];
  myMovieList = [];

  constructor(
    private apiService: ApiService,
    private movieApiService: MovieApiService
  ) {}

  getSearchResults() {
    return this.searchResults;
  }

  getMovieList() {
    return this.myMovieList;
  }

  async searchForMovies(searchTerm) {}

  async loadMovieList() {}

  async saveToList(movie) {}
}
