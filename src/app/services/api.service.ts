import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private SERVER_URL = "https://ce-authenticated-backend.herokuapp.com/";
  constructor(private httpClient: HttpClient) {}
  async get() {
    // return this.httpClient.get<IBeer[]>(this.SERVER_URL).toPromise();
  }
  async post() {}
}
