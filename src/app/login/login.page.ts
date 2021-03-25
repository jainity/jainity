import { RegisterPage } from './../register/register.page';
import { Tools } from './../shared/tools';
import { Component } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  mobileno:any = "";
  errorMsg:any='';
  loginForm: FormGroup;

  constructor(private route: Router,public formBuilder: FormBuilder,
    private apiServices: ApiService,public tools: Tools,
    public toastController: ToastController,public modalCtrl: ModalController) {

    this.loginForm = this.formBuilder.group({
      phone: ['',[Validators.required, Validators.maxLength(10),Validators.pattern('[0-9]+')]],
      //  email: ['pratik.aipl@gmail.com', [Validators.required, Validators.email]],
      //  password: ['Pratik123', Validators.required],
    });
  
  }
  
  async onRegClick() {  
    this.modalCtrl.dismiss('register');
  }  

//  onRegClick() {
//   this.route.navigateByUrl('/register');
//   }

  onLoginClick() {
    var msg = ''

    if (this.mobileno =='') {
        msg = msg + 'Please enter mobile number<br />'
      } else if (this.mobileno.length != 10) {
        msg = msg + 'Please enter valid mobile number<br />'
      }
    if (msg != '') {
      this.errorMsg=msg;
  // this.tools.openAlert(msg);
    } else {
      this.errorMsg='';
      if (this.tools.isNetwork()) {
        this.tools.openLoader();
        this.apiServices.SendOTP(this.mobileno).subscribe(response => {
          let res: any = response;
          if(res.status){
            this.tools.closeLoader();
            localStorage.setItem('mobileno', this.mobileno);
            setTimeout(() => {              
              this.modalCtrl.dismiss('OTPPage');

            }, 1000);
          }else{
            this.tools.presentAlert('','Something wrong...', 'Ok');
          }
        }, (error: Response) => {
          this.tools.closeLoader();
          console.log('Error ', error);
          let err:any = error;
          this.tools.openAlertToken(err.status, err.error.message);    
        });
      }
    }
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
