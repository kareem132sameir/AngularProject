import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  token: any;
  constructor() {
    this.token = localStorage.getItem('token');
    this.loggedIn.next(!!this.token);
  }

//   isLoggedIn(): Observable<boolean> {
//     const loggedIn = this.loggedIn.getValue();
//     console.log('isLoggedIn:', loggedIn);
//     return this.loggedIn.asObservable();
//   }
isLoggedIn(): boolean
  {
    const loggedInValue = this.loggedIn.getValue();
    console.log('isLoggedIn:', loggedInValue);
    return loggedInValue;
  }

  login(): void
  {
    this.loggedIn.next(true);
  }

  loginWithToken(): void
  {
    // Implement your logic to handle authentication using the token
    // This might involve making an API request to validate the token and retrieve user information
    // Once the user is authenticated, you can store the token and any relevant user information
    // For example, you can store the token in the local storage for subsequent requests
    localStorage.setItem('token', 'your-authentication-token');
    this.token = 'your-authentication-token';
  }
  
  hasToken(): boolean {
    return !!this.token;
  }

  logout(): void {
    // Implement your logout logic here
    // For example, you can clear the token from storage and update the logged-in status
    localStorage.removeItem('token');
    this.token = undefined;
    this.loggedIn.next(false);
  }
}
