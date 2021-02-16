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
//dotp:any='';

otpcode:any = "";

verificont:any = "";

loginForm: FormGroup;
errorMsg:any='';


  constructor(private router: Router, public route: ActivatedRoute,public formBuilder: FormBuilder,
    private apiServices: ApiService,public tools: Tools) { 
      //this.mno = this.route.snapshot.paramMap.get('mno')  
     // this.dotp = this.route.snapshot.paramMap.get('dotp')  

     this.mno =localStorage.getItem('mobileno');


      console.log('params1 =>', this.mno);
      this.verificont="Please Enter Verification Code Send to ******"+this.mno.substr(this.mno.length - 4)

  }

  onBackClick(){
    this.tools.backPage();
   }
  onSubmitClick() {
    //this.router.navigate(['/home']);

    var msg = ''

      
    if (this.otpcode =='') {
      msg = msg + 'Please enter OTP <br />'
    } 

    if (msg != '') {
      this.errorMsg=msg;
      //this.tools.openAlert(msg);
    } else {
      this.errorMsg='';
      if (this.tools.isNetwork()) {
        this.tools.openLoader();
        this.apiServices.VerificationOTP(this.otpcode,this.mno).subscribe(response => {
          this.tools.closeLoader();
          let res: any = response;


          if(res.status){
            localStorage.setItem('login_token', res.token);
            console.log('response ', res.data[0]);
            //localStorage.setItem('userdata', JSON.stringify(res.data[0]));
            this.apiServices.setUserData(res.data[0])
            this.router.navigateByUrl('/home', { replaceUrl: true });
           // this.router.navigate(['/home'], { replaceUrl: true });
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
