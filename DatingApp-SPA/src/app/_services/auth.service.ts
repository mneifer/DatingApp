import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiurl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private httpClient: HttpClient) { }

  login(model: any) {
    return this.httpClient.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        if (response) {
          localStorage.setItem('token', response.token);

          this.decodedToken = this.jwtHelper.decodeToken(response.token);
        }
      })
    );
  }

  register(model: any) {
    return this.httpClient.post(this.baseUrl + 'register', model);
  }

  get isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
