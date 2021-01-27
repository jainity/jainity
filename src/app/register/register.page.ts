import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private route: Router,public toastController: ToastController) {}

  ngOnInit() {
  }
  onLogClick() {
    this.route.navigate(['/login']);
    }

  async cliRegister() {
    const toast = await this.toastController.create({
      message: 'This Is Register',
      duration: 2000 ,
      color: 'primary'
    });
    toast.present();
  }

}
