import { Component, OnInit } from "@angular/core";
import { MovieService } from "./services/movie.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.searchResults = this.movieService.getSearchResults();
    this.movieService.loadMovieList();
    this.myMovieList = this.movieService.getMyMovieList();
  }
  searchResults = [];
  myMovieList = [];
  title = "Angular Flix";
}
