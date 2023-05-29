
import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './Services/AuthService';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})

export class afterLoginGuardGuard implements CanActivate
{
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      alertify.set('notifier', 'position', 'top-center');
      alertify.error('You are already logged in .');
      // User is logged in, prevent access to login and register pages
      // this.router.navigate(['/students']); // Redirect to the desired page after login
      return false; // Block access to the route
    } else {
      // User is not logged in, allow access to login and register pages
      return true; // Allow access to the route
    }
  }
}
