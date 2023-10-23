import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Person } from './interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class AppsrvService {

  constructor(private http: HttpClient = inject(HttpClient)) { }

  endpoint = 'http://localhost:3000';

  getAllUsers() {
    return this.http.get<Person[]>(this.endpoint + '/users');
  }

  getUserById(userId: number) {
    return this.http.get<Person>(this.endpoint + `/users/${userId}`)
  }

  addUser(user: Person) {
    return this.http.post<Person>(this.endpoint + '/users', user);
  }
}
