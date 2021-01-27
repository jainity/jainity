import { RegisterPage } from './../register/register.page';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  mobileno:any = "";

  constructor(private route: Router,public toastController: ToastController) {}

 onRegClick() {
  this.route.navigate(['/register']);
  }

  onLoginClick() {
    console.log(this.mobileno);
   //this.route.navigate(['/otpverification']);
   this.route.navigateByUrl('/otpverification/'+this.mobileno);
    }



  // async onLoginClick() {
  //   const toast = await this.toastController.create({
  //     message: 'This Is Login',
  //     duration: 2000 ,
  //     color: 'primary'
  //   });
  //   toast.present();
  // }
  

}
