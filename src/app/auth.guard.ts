import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './Services/AuthService';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // User is already logged in
      return true;
    }
    else if (this.authService.hasToken())
    {
      // User has a valid token, log them in
      this.authService.loginWithToken();
      return true;
    }
    else
    {
      // User is not logged in, redirect to the login page
      this.router.navigate(['/login']);
      alertify.set('notifier', 'position', 'top-center');
      alertify.error('You need to login first.');
      return false;
    }
  }
}
