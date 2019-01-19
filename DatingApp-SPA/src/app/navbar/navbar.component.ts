import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully!');
    }, error => {
      this.alertify.error(error);
    },
    () => {
      this.router.navigate(['/members']);
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out succefully!');
    this.router.navigate(['/home']);
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}
