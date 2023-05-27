import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

//   isLoggedIn(): Observable<boolean> {
//     const loggedIn = this.loggedIn.getValue();
//     console.log('isLoggedIn:', loggedIn);
//     return this.loggedIn.asObservable();
//   }
isLoggedIn(): boolean {
    const loggedInValue = this.loggedIn.getValue();
    console.log('isLoggedIn:', loggedInValue);
    return loggedInValue;
  }
  login(): void {
    this.loggedIn.next(true);
  }

  logout(): void {
    this.loggedIn.next(false);
  }
}
