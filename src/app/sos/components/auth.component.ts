import { Component } from '@angular/core';
import { AuthService, UserInfo } from './auth.service';

@Component({
  selector: 'proxy-authentication',
  providers: [],
  template: require('./auth.template.html')
})
export class AuthComponent {

  private isUserLoggedIn: boolean = false;
  private user: UserInfo = null;

  constructor(
    private authService: AuthService
  ) { }

  protected logIn() {
    this.authService.logIn();
  }

  protected logOut() {
    this.authService.logOut();
  }
}