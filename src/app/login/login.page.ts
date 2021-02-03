import { Tools } from './../shared/tools';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
  loginForm: FormGroup;

  constructor(private route: Router,public formBuilder: FormBuilder,
    private apiServices: ApiService,public tools: Tools,
    public toastController: ToastController) {

    this.loginForm = this.formBuilder.group({
      phone: ['',[Validators.required, Validators.maxLength(10),Validators.pattern('[0-9]+')]],
      //  email: ['pratik.aipl@gmail.com', [Validators.required, Validators.email]],
      //  password: ['Pratik123', Validators.required],
    });
  
  }

 onRegClick() {
  this.route.navigate(['/register']);
  }

  onLoginClick() {
    //console.log(this.mobileno);
   //this.route.navigate(['/otpverification']);

    //this.route.navigateByUrl('/otpverification/'+this.mobileno);

     // this.tools.openLoader();
  //  let phone = this.loginForm.get('phone').value;

    var msg = ''

    if (this.mobileno =='') {
        msg = msg + 'Please enter mobile number<br />'
      } else if (this.mobileno.length != 10) {
        msg = msg + 'Please enter valid mobile number<br />'
      }
    
    if (msg != '') {
      this.tools.openAlert(msg);
    } else {

      if (this.tools.isNetwork()) {
        this.tools.openLoader();
        this.apiServices.SendOTP(this.mobileno).subscribe(response => {
          this.tools.closeLoader();
          let res: any = response;
          //console.log('response ', res.login_token);

          //if(res.status && res.data.user.activated != '0'){
          if(res.status){
            //localStorage.setItem('userdata', JSON.stringify(res.data.user));
            localStorage.setItem('mobileno', this.mobileno);
            this.route.navigate(['/otpverification']);
          }else{
            this.tools.presentAlert('','Something wrong...', 'Ok');
          }
        }, (error: Response) => {
          this.tools.closeLoader();
          console.log('Error ', error);
          let err:any = error;
          this.tools.openAlertToken(err.status, err.error.message);
    
        });
      } else {
        this.tools.closeLoader();
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
