import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiurl;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + 'users');
  }

  getUser(id): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + 'users/' + id);
  }

  updateUser(id: Guid, user: User) {
    return this.httpClient.put(this.baseUrl + 'users/' + id, user);
  }
}
