import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Success!');
    }, error => {
      console.log('Error!');
    });
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Successfuly logged out');
  }

  get isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
