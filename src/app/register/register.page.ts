import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Tools } from '../shared/tools';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  Fname:any = "";
  Lname:any = "";
  mobileno:any = "";

  loginForm: FormGroup;
  
  fnameerror:any='';
  lnameerror:any='';
  moberror:any='';

  RoleID:any='2';
 
  constructor(private route: Router,public formBuilder: FormBuilder,
    private apiServices: ApiService,public tools: Tools,
    public toastController: ToastController,public modalCtrl: ModalController) {
      this.tools.closeLoader();
    this.loginForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50),Validators.pattern('[a-zA-Z]+')]],
      lname: ['', [Validators.required, Validators.maxLength(50),Validators.pattern('[a-zA-Z]+')]],
      mobileno: ['',[Validators.required, Validators.maxLength(10),Validators.pattern('[0-9]+')]],
    });
  
  }

  
  ngOnInit() {
  }

  async onLogClick() {
    this.modalCtrl.dismiss('login');
    }


    cliRegister() {

      var msg = ''

      this.errClr();

      if (this.Fname =='') {
        msg = msg + 'Please enter First name<br />'
       this.fnameerror = 'Please enter First name<br />'
     } else if (this.Fname.length < 3) {
        msg = msg + 'First name should be at least 3 letters long and without any space<br />'
       this.fnameerror = 'First name should be at least 3 letters long and without any space'
     }else if (this.Lname =='') {
        msg = msg + 'Please enter Last name<br />'
       this.lnameerror='Please enter Last name<br />'
     } else if (this.Lname.length < 3) {
        msg = msg + 'Last name should be at least 3 letters long and without any space<br />'
       this.lnameerror= 'Last name should be at least 3 letters long and without any space'
     }else if (this.mobileno =='') {
       msg = msg + 'Please enter mobile number<br />'
      this.moberror= 'Please enter mobile number'
     } else if (this.mobileno.length != 10) {
       msg = msg + 'Please enter valid mobile number<br />'
       this.moberror= 'Please enter valid mobile number'
     }

      if (msg != '') {
        //this.fnameerror=msg;
       // this.tools.openAlert(msg);
      } else {
        this.errClr();

        if (this.tools.isNetwork()) {
          this.tools.openLoader();
          this.apiServices.Register(this.RoleID,this.Fname,this.Lname,this.mobileno).subscribe(response => {
            let res: any = response;
            if(res.status){
              this.callOTP();
            }else{
              this.tools.presentAlert('',res.message, 'Ok');
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

  callOTP() {
    this.apiServices.SendOTP(this.mobileno).subscribe(response => {
      this.tools.closeLoader();
      let res: any = response;
      if(res.status){
        localStorage.setItem('mobileno', this.mobileno);

        setTimeout(() => {              
         // this.route.navigateByUrl('/otpverification');
          this.modalCtrl.dismiss('OTPPage');
        }, 100);

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

  errClr() {
    this.fnameerror='';
    this.lnameerror='';
    this.moberror='';

  }


  // async cliRegister() {
  //   const toast = await this.toastController.create({
  //     message: 'This Is Register',
  //     duration: 2000 ,
  //     color: 'primary'
  //   });
  //   toast.present();
  // }

}
