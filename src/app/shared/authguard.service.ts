// auth-guard.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable()
export class AuthGuard implements CanActivate {
  //   jwtHelper: JwtHelper = new JwtHelper();
  constructor(private router: Router,private apiServices: ApiService) { }

  canActivate() {
    if (this.loggedIn()) {
      //console.log("roleid>>>>-*-",this.apiServices.getUserData().role_id)
      return true;
     // console.log("loggedIn>>>>-*-",this.loggedIn)

      // if(this.apiServices.getUserData().role_id==2){
      //   this.router.navigateByUrl('/donordashboard', { replaceUrl: true });
      // } else if(this.apiServices.getUserData().role_id==3){
      //   this.router.navigateByUrl('/home', { replaceUrl: true });
      // }else{
      //   this.router.navigateByUrl('/home', { replaceUrl: true });
      // }
    }else{
      // this.router.navigate(['/home']);
      // return false;

      return true;
    }
     
  }

  loggedIn() {
    // console.log('isLogin => ',localStorage.getItem('userdata'))
    if (localStorage.getItem('userdata') === null || localStorage.getItem('userdata') === '' ) {
      return false;
    }
    return true;
  }
}
