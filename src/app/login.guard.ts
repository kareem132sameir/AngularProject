import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './Services/AuthService';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // User is already logged in, prevent access to login and register pages
      alertify.set('notifier', 'position', 'top-center');
      alertify.error('you are already logged in.');
      this.router.navigate(['/students']); // Redirect to another page, e.g., students
      return false;
    }
    alertify.error('you are already logged in.');

    return true;
  }
}
