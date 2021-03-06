import { Injectable } from '@angular/core';
import { API_URL } from '../config/config.api'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const API = "/orders/"
const URL = API_URL + API;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  findAll() {
    console.log(URL);
    return this.http.get(URL);
  }

  findOneById(id: any) {
    console.log(URL + id);
    return this.http.get(URL + id);
  }


}