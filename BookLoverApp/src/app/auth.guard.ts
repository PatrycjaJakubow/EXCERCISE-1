import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const secretCode = 'open sesame';
    const enteredCode = prompt('What is the secret code?');

    if (enteredCode === secretCode) {
      console.log('Correct code entered')
      return true; // Allowed to enter
     
    } else {
      alert('Sorry, wrong code! You are not allowed in.');
      this.router.navigate(['/']); // Redirect to home if the code is incorrect
      return false; // Not allowed to enter
    }
  }
}