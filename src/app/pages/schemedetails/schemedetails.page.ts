import { OtpverificationPage } from '../../otpverification/otpverification.page';
import { RegisterPage } from '../../register/register.page';
import { LoginPage } from '../../login/login.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Tools } from '../../shared/tools';
import { PaymentconfirPage } from 'src/app/paymentconfir/paymentconfir.page';
import { EventService } from 'src/app/services/EventService';

@Component({
  selector: 'app-schemedetails',
  templateUrl: './schemedetails.page.html',
  styleUrls: ['./schemedetails.page.scss'],
})
export class SchemedetailsPage implements OnInit {

  
  isLogin=false;
  DetailsList =[];

  SGid:any;
  INid:any;

  Type:any;
  Tittle:any;
  TopslideItem=[];

  slideOpts2 ={
    slidesPerView: 1,
    initialSlide: 0,
    autoplay:true,
    speed: 500,
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      shadowOffset: 20,
      depth: 100,
      modifier: 1,
      slideShadows: true,
     
    }
 
  }
  constructor(private eventServic:EventService,private route: Router,public alertController: AlertController,
     public apiService: ApiService,
    public tools: Tools,public modalCtrl: ModalController) {

      this.isLogin = this.apiService.getUserData() !=undefined;
      this.eventServic.formOtp$.subscribe(() => {
        this.isLogin = this.apiService.getUserData() !=undefined;
      });

      localStorage.removeItem('Name');
      localStorage.removeItem('AMT');

      this.SGid=localStorage.getItem('schemeId');
      this.INid=localStorage.getItem('InstituteId');
      this.Type=localStorage.getItem('TYPE');
      this.Tittle=localStorage.getItem('Tittle');

   }


 async LoginClick() {  

    const modal = await this.modalCtrl.create({  
      component: LoginPage ,
      //componentProps: { id: 5, name: 'gaurav' },
      cssClass: 'login-modal',
      //backdropDismiss: false,
    });  
    modal.onDidDismiss().then(result => {
      console.log(result.data);

      if(result.data =='register'){
       this.openRegister();
      }
      if(result.data =='OTPPage'){
        this.openOtp();
       }
    });
    

    return await modal.present();  
  }  
  
  async openRegister() {
    const modal = await this.modalCtrl.create({  
      component: RegisterPage ,
            cssClass: 'register-modal',

    });  
    modal.onDidDismiss().then(result => {
      console.log(result.data);
      if(result.data =='login'){
        this.openlogin();
       }
       if(result.data =='OTPPage'){
        this.openOtp();
       }
    });

    return await modal.present();  
  }

  async openlogin() {
    const modal = await this.modalCtrl.create({  
      component: LoginPage ,
            cssClass: 'login-modal',

    });  
    modal.onDidDismiss().then(result => {
      if(result.data =='login'){
        this.openlogin();
       }
       if(result.data =='register'){
        this.openRegister();
       }
       if(result.data =='OTPPage'){
        this.openOtp();
       }
    });

    return await modal.present();
  }

  async openOtp() {

    const modal = await this.modalCtrl.create({  
      component: OtpverificationPage ,
            cssClass: 'login-modal',
            componentProps: { value: 'schemedetails' } //this for pass login logout condition
    });  
    modal.onDidDismiss().then(result => {
      if(result.data =='login'){
        this.openlogin();
       }
       if(result.data =='register'){
        this.openRegister();
       }
       if(result.data =='OTPPage'){
        this.openOtp();
       }
       //this for pass login logout condition
       if(result.data =='schemedetails'){ 
        this.isLogin = this.apiService.getUserData() != undefined;
       }
    });

    return await modal.present();
  }


   async OnConnectClick(){
    
    if (!this.isLogin) {

      const alert = await this.alertController.create({
        message: 'Coming Soon',
        buttons: [
            {
                text: 'OK',
                role: 'OK',
                handler: () => {
    
                }
            },
        ], backdropDismiss: false
    });
    alert.present();
    }else
  this.route.navigateByUrl('/Dashboard');
 }


 async LogoutClick(){
   const alert = await this.alertController.create({
    message: 'Are you sure you want to logout?',
    buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {

            }
        },
        {
            text: 'Logout',
            handler: () => {
                //this.callLogout(true);
                this.isLogin = !this.isLogin;
                localStorage.clear();
                this.route.navigateByUrl('/home', { replaceUrl: true });
            }
        }
    ], backdropDismiss: false
});
return await alert.present();
 }

  ngOnInit() {}

  onInstituteClick(){}

  onSchemeGroupClick(){}

  async onDonateClick(item){

    if (!this.isLogin) {
      this.LoginClick();
    }else{
      var msg = ''
      console.log('Selected Item ',item)
      if (item.amount ==undefined || item.amount =='') {
        msg = msg + 'Please enter Amount <br/>'
      }
      
      if (msg != '') {
        this.tools.openAlert(msg);
      } else {
        if(parseFloat(item.amount)<=100000){
        localStorage.setItem('Name',this.Tittle)
        localStorage.setItem('RazorpayMID',item.RazorpayMID)
        localStorage.setItem('AMT',item.amount) 
        localStorage.setItem('SchemeDesc',item.SchemeDesc)
        localStorage.setItem('InstituteSchemeID',item.InstituteSchemeID)
        localStorage.setItem('InstituteID',item.InstituteID)
        localStorage.setItem('SchemeName',item.SchemeName)

        //this.route.navigateByUrl('/paymentconfir')



        const modal = await this.modalCtrl.create({  
          component: PaymentconfirPage ,
          cssClass: 'register-modal',
          //backdropDismiss: false,
        });  
        modal.onDidDismiss().then(result => {
          console.log(result.data);
    
          // if(result.data =='register'){
          //  this.openRegister();
          // }
          // if(result.data =='OTPPage'){
          //   this.openOtp();
          //  }
        });
        return await modal.present();

        }
        else{
          this.tools.openAlert('Donation amount cannot be greater 1 lakh rupees');
        }
        
      }
    }
      
  }
  
  
  ionViewDidEnter() {
    this.getBannerCall();
}

getBannerCall() {
  if (this.tools.isNetwork()) {
    this.tools.openLoader();
    console.log('getSGLISTCall');
    this.apiService.getHomeBanner().subscribe(response => {
      console.log('getBanner_RESPONSE>>>');
      let res: any = response;
      this.getSGDTLLISTCall();
      if(res.status){
        this.TopslideItem = res.data;
      }else{
        this.TopslideItem=res.message
      }
      console.log(res)
    }, (error: Response) => {
      console.log('ERORR>>>');
      this.tools.closeLoader();
      let err:any = error;
      console.log('Error ', err);
     this.tools.openAlertToken(err.status, err.error.message);

    });
  }
}

  getSGDTLLISTCall() {
    if (this.tools.isNetwork()) {
      //this.tools.openLoader();
      console.log('getSGLISTCall');
      this.apiService.getSchemeWiseDetailList(this.Type,(this.Type=='Institute')?this.INid:this.SGid).subscribe(response => {
        console.log('RESPONSE>>>');

        this.tools.closeLoader();
        let res: any = response;
        if(res.status){
          this.DetailsList = res.data;
        }

        console.log(res)
      }, (error: Response) => {
        console.log('ERORR>>>');
        this.tools.closeLoader();
        let err:any = error;
        console.log('Error ', err);
       this.tools.openAlertToken(err.status, err.error.message);
  
      });
    }
  }

  onSearchClick() {   
    this.route.navigateByUrl('/searchitem');
}

onEnter(event) {}

clearSearch(event) {}
getItems(event) {}

}
