import { OtpverificationPage } from '../../otpverification/otpverification.page';
import { RegisterPage } from '../../register/register.page';
import { LoginPage } from '../../login/login.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Tools } from '../../shared/tools';
import { EventService } from 'src/app/services/EventService';

@Component({
  selector: 'app-institutelist',
  templateUrl: './institutelist.page.html',
  styleUrls: ['./institutelist.page.scss'],
})
export class InstitutelistPage implements OnInit {

  
  isLogin=false;
  InstList =[];
  InstituteType=[];
  sliderType:any;


  constructor(private eventServic:EventService,private route: Router,public alertController: AlertController,
     public apiService: ApiService,
    public tools: Tools,public modalCtrl: ModalController) {

      this.tools.closeLoader();
      this.eventServic.formOtp$.subscribe(() => {
        this.isLogin = this.apiService.getUserData() !=undefined;
      });
      localStorage.removeItem('InstituteId');

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

  ngOnInit() {
  }

  onInstituteClick(){

  }

  onSchemeGroupClick(){

  }

  onInstiDetails(item){
    localStorage.setItem('InstituteId',item.InstituteID)
    localStorage.setItem('TYPE','Institute')
    localStorage.setItem('Tittle',item.InstituteName)
    this.route.navigateByUrl('/schemedetailslist');

    }

  ionViewDidEnter() {
    this.getInstitutetype();
}

onInstituteList(item){
  this.getInstitutetypeList(item.InstituteTypeID);
 }
 
getInstitutetype() {
  if (this.tools.isNetwork()) {
    this.tools.openLoader();
    console.log('getSGLISTCall');
    this.apiService.getInstituteType().subscribe(response => {
      console.log('getInstitutetype_RESPONSE>>>');

      //this.tools.closeLoader();
      let res: any = response;

      if(res.status){
        this.InstituteType = res.data;

        this.sliderType = res.data[0].InstituteType;
        this.getInstitutetypeList(res.data[0].InstituteTypeID);

      }else{
        this.InstituteType=res.message
      }
      console.log(res)
    }, (error: Response) => {
      console.log('ERORR>>>');
      this.tools.closeLoader();
      this.tools.closeLoader();
      let err:any = error;
      console.log('Error ', err);
     this.tools.openAlertToken(err.status, err.error.message);

    });
  } else {
    console.log('ELSE>> ');
    this.tools.closeLoader();
  }
}

getInstitutetypeList(ID) {
  if (this.tools.isNetwork()) {
    //this.tools.openLoader();
    console.log('getSGLISTCall');
    this.apiService.getInstituteTypeList(ID).subscribe(response => {
      console.log('RESPONSE>>>');

      let res: any = response;
      if (res.status) {
        this.InstList = res.data;
      } else {
        this.InstList = res.message
      }
      this.tools.closeLoader();

      console.log(res)
    }, (error: Response) => {
      console.log('ERORR>>>');
      this.tools.closeLoader();
      this.tools.closeLoader();
      let err: any = error;
      console.log('Error ', err);
      this.tools.openAlertToken(err.status, err.error.message);

    });
  } else {
    console.log('ELSE>> ');
    this.tools.closeLoader();
  }
}

}
