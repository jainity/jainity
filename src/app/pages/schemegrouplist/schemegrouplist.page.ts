import { OtpverificationPage } from '../../otpverification/otpverification.page';
import { RegisterPage } from '../../register/register.page';
import { LoginPage } from '../../login/login.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, MenuController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Tools } from '../../shared/tools';
import { EventService } from 'src/app/services/EventService';

@Component({
  selector: 'app-schemegrouplist',
  templateUrl: './schemegrouplist.page.html',
  styleUrls: ['./schemegrouplist.page.scss'],
})
export class SchemegrouplistPage implements OnInit {

  openFirst() {
    this.menu.enable(true, "first"); 
    this.menu.open("first");
  }
  isLogin=false;
  SGList =[];



  constructor(private eventServic:EventService,private route: Router,public alertController: AlertController,
     public apiService: ApiService, private menu: MenuController,
    public tools: Tools,public modalCtrl: ModalController) {

      this.isLogin = this.apiService.getUserData() !=undefined;

      this.eventServic.formOtp$.subscribe(() => {
        this.isLogin = this.apiService.getUserData() !=undefined;
      });
            localStorage.removeItem('schemeId');
            this.eventServic.closemenu$.subscribe(() => {
              this.tools.menuClose();
            });

   }

   ionViewWillEnter() {
    this.menu.enable(false);
  }
  
 async LoginClick() {  
  this.tools.menuClose();

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
    this.tools.menuClose();
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
    this.tools.menuClose();
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
    this.tools.menuClose();
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
  this.tools.menuClose();
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

  onSchemeDetails(item){
    localStorage.setItem('schemeId',item.SchemeGroupID)
    localStorage.setItem('TYPE','SchemeGroup')
    localStorage.setItem('Tittle',item.SchemeGroup)
    this.route.navigateByUrl('/schemedetailslist')
   
   }


  ionViewDidEnter() {
    this.getSGLISTCall();
}

getSGLISTCall() {
  if (this.tools.isNetwork()) {
    this.tools.openLoader();
    console.log('getSGLISTCall');
    this.apiService.getHomeSchemeGroup().subscribe(response => {
      console.log('getSGLISTCall_RESPONSE>>>');

      this.tools.closeLoader();
      let res: any = response;
      if(res.status){
        this.SGList = res.data;
      }else{
        this.SGList=res.message
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

}
