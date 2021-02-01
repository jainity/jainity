import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Tools } from '../shared/tools';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.page.html',
  styleUrls: ['./otpverification.page.scss'],
})
export class OtpverificationPage implements OnInit {
mno:any='';
dotp:any='';

otpcode:any = "";

verificont:any = "";

loginForm: FormGroup;


  constructor(private router: Router, public route: ActivatedRoute,public formBuilder: FormBuilder,
    private apiServices: ApiService,public tools: Tools,
    public toastController: ToastController) { 
      this.mno = this.route.snapshot.paramMap.get('mno')  
      this.dotp = this.route.snapshot.paramMap.get('dotp')  

      console.log('params1 =>', this.mno);
      this.verificont="Please Enter Verification Code Send to ******"+this.mno.substr(this.mno.length - 4)

  }

  onSubmitClick() {
    //this.router.navigate(['/home']);

    var msg = ''

      
    if (this.otpcode =='') {
      msg = msg + 'Please enter OTP <br />'
    } 

    if (msg != '') {
      this.tools.openAlert(msg);
    } else {

      if (this.tools.isNetwork()) {
        this.tools.openLoader();
        this.apiServices.VerificationOTP(this.otpcode).subscribe(response => {
          this.tools.closeLoader();
          let res: any = response;
          console.log('response ', res.token);

          if(res.status && res.data.user.activated != '0'){
            localStorage.setItem('login_token', res.token);
            localStorage.setItem('userdata', JSON.stringify(res.data));
           // this.route.navigateByUrl('/home');
            this.router.navigate(['/home']);
          }else{
            this.tools.presentAlert('','Something Wrong...', 'Ok');
          }
        }, (error: Response) => {
          this.tools.closeLoader();
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

  onResendClick() {
      this.router.navigate(['/home']);
    }

  ngOnInit() {
  }

}
