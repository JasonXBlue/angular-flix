import { Injectable } from "@angular/core";
import { MovieApiService } from "../services/movie-api.service";
import { ApiService } from "../services/api.service";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  searchResults: any[] = [];
  myMovieList: any[] = [];

  constructor(
    private apiService: ApiService,
    private movieApiService: MovieApiService
  ) {}

  getSearchResults(): any[] {
    return this.searchResults;
  }

  getMyMovieList(): any[] {
    return this.myMovieList;
  }

  async searchForMovies(searchTerm: string) {
    const response = await this.movieApiService.get(searchTerm);
    this.searchResults.length = 0;
    this.searchResults.push(...response.results);
  }

  async loadMovieList() {
    const results = await this.apiService.get();
    this.myMovieList.length = 0;
    this.myMovieList.push(...results);
  }

  async saveToList(movie: any) {
    await this.apiService.post(movie);
    this.loadMovieList();
  }
}
