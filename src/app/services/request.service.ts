import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(this.url)
  }
}
