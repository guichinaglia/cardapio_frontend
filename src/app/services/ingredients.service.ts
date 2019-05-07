import { Injectable } from '@angular/core';
import { API_URL } from '../config/config.api'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ingredient } from '../model/ingredient';

const api = "/ingredients/"
const URL = API_URL + api;

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http : HttpClient) { }
  
  save(ingredient: any) {
    console.log(URL);
    return this.http.post<Ingredient>(URL, ingredient);
  }

  findAll() {
    console.log(URL);
    return this.http.get(URL);
  }

  findOneById(id: any) {
    return this.http.get(URL, id);
  }

  delete(id: any) {
    return this.http.delete(URL + id);
  }

}
