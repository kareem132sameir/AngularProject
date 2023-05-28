// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.isLoggedIn()) {
//       return true; // Allow access to the route
//     } else {
//       this.router.navigate(['/login']); // Redirect to the login page
//       alert('you need to login')
//       return false; // Block access to the route
//     }
//   }
// }
// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
//  import { AuthService } from './Services/AuthService';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.isLoggedIn()) {
//       return true; // Allow access to the route
//     } else {
//       this.router.navigate(['/login']); // Redirect to the login page
//       alert('You need to log in');
//       return false; // Block access to the route
//     }
//   }
// }
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
      console.log(this.authService.isLoggedIn);
      console.log("hello world");
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/login']); // Redirect to the login page
      console.log(this.authService.isLoggedIn);

      console.log("hello world2");
      alertify.set('notifier', 'position', 'top-center');
      alertify.error('You need to login first.');
      // alert('You need to log in');
      return false; // Block access to the route
    }
  }
}

