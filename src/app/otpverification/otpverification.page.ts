import { EventService } from './../services/EventService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, ModalController, NavParams } from '@ionic/angular';
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

fromPage;
  constructor(private eventService:EventService, private router: Router,public navParams: NavParams, public route: ActivatedRoute,public formBuilder: FormBuilder,
    private apiServices: ApiService,public tools: Tools,public modalCtrl: ModalController) {
      this.tools.closeLoader(); 
      this.fromPage = this.navParams.get("value");
     this.mno =localStorage.getItem('mobileno');
     if(this.mno != undefined && this.mno != null)
      this.verificont="Please Enter Verification Code Send to ******"+this.mno.substr(this.mno.length - 4)
  }


  onSubmitClick() {
    //this.router.navigate(['/home']);

    var msg = ''

      
    if (this.otpcode =='') {
      msg = msg + 'Please enter OTP <br/>'
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
            // localStorage.setItem('login_token', res.token);
            this.apiServices.setLoginToken(res.token);
            console.log('response ===>  ', res );
            //localStorage.setItem('userdata', JSON.stringify(res.data[0]));
            this.apiServices.setUserData(res.data[0])
            this.eventService.publishFormOtp();
            setTimeout(() => {    
              
              if(this.fromPage == 'schemedetails')
              this.modalCtrl.dismiss(this.fromPage);  
              else{

               this.modalCtrl.dismiss() 
               console.log("USERID>>>>>>> ",this.apiServices.getUserData().role_id);       
              
               if(this.apiServices.getUserData().role_id==2){
                 this.router.navigateByUrl('/donordashboard', { replaceUrl: true });
               } else if(this.apiServices.getUserData().role_id==3){
                 this.router.navigateByUrl('/home', { replaceUrl: true });
               }else{
                 this.router.navigateByUrl('/home', { replaceUrl: true });
               }
 
              }
            }, 100);

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
      //this.router.navigate(['/home']);

        if (this.tools.isNetwork()) {
          this.tools.openLoader();
          this.apiServices.SendOTP(this.mno).subscribe(response => {
           
            let res: any = response;
            if(res.status){
              localStorage.setItem('mobileno', this.mno);
              setTimeout(() => {              
                this.tools.closeLoader();
  
               // this.route.navigateByUrl('/otpverification');
                //this.modalCtrl.dismiss('OTPPage');
                this.tools.presentAlert('','Send Successfully', 'Ok');

              }, 1000);
            }else{
              this.tools.closeLoader();
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

  ngOnInit() {
  }

}
