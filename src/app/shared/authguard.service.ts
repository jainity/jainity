// auth-guard.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  //   jwtHelper: JwtHelper = new JwtHelper();
  constructor(private router: Router) { }

  canActivate() {
    if (this.loggedIn()) {
      return true;
    }
    return true;
     //this.router.navigate(['/home']);
     //return false;
  }

  loggedIn() {
    // console.log('isLogin => ',localStorage.getItem('userdata'))
    if (localStorage.getItem('userdata') === null || localStorage.getItem('userdata') === '' ) {
      return false;
    }
    return true;
  }
}
