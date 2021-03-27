import { OtpverificationPage } from './../../otpverification/otpverification.page';
import { RegisterPage } from './../../register/register.page';
import { LoginPage } from './../../login/login.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonSlides, MenuController, ModalController, PopoverController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Tools } from 'src/app/shared/tools';
import { EventService } from 'src/app/services/EventService';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';

declare const removeMenu:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  @ViewChild('InstiSlider')  InstiSlider: IonSlides
  @ViewChild('GroupSlider')  GroupSlider: IonSlides

  @ViewChild('content') content: any;
  
  isLogin=false;
  
  sliderType:any;

  name = '';
  contactno = '';
  email = '';
  subject = '';
  message = '';
  captchacode = '';

  
  captchacodeErr = '';
  nameErr = '';
  contactnoErr = '';

  emailErr = '';
  subjectErr = '';
  messageErr = '';
  reg:any;

  Loginusername:any;

  randomNumber:string="";

  slideOpts ={
    slidesPerView: this.checkScreen(),
    initialSlide: 0,
    preloadImages: true,
    lazy: false,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      shadowOffset: 20,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
  slideOptsCause ={
    slidesPerView: this.checkScreen(),
    initialSlide: 0,
    preloadImages: true,
    lazy: false,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      shadowOffset: 20,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }

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
  openFirst() {
    this.menu.enable(true, "first"); 
    this.menu.open("first");
  }

  checkScreen() {
    let innerWidth = window.innerWidth;
    console.log('Inner Width ',innerWidth);
    switch (true) {
      case 340 <= innerWidth && innerWidth <= 400:
        return 1;
      case 401 <= innerWidth && innerWidth <= 700:
        return 2;
      case 701 <= innerWidth && innerWidth <= 900:
        return 3;
      case 901 <= innerWidth:
        return 4;
    }
  }
  InstswipeNext(){
    this.InstiSlider.slideNext();
  }

  InstswipePrev(){
    this.InstiSlider.slidePrev();
  }

  grpswipeNext(){
    this.GroupSlider.slideNext();
  }

  grpswipePrev(){
    this.GroupSlider.slidePrev();
  }

  slideItem=[];
  TopslideItem=[];
  GroupslideItem=[];
  InstituteType=[];


  constructor(public popoverCtrl: PopoverController,private eventServic:EventService,private route: Router,public alertController: AlertController,
     public apiService: ApiService,public formBuilder: FormBuilder, private menu: MenuController, 
    public tools: Tools,public modalCtrl: ModalController) {

      this.isLogin = this.apiService.getUserData() !=undefined;
      localStorage.removeItem('schemeId');
      localStorage.removeItem('InstituteId');

      this.eventServic.formOtp$.subscribe(() => {
        this.isLogin = this.apiService.getUserData() !=undefined;
      });
      console.log('isLogin>>>>>>',this.isLogin);
      this.eventServic.closemenu$.subscribe(() => {
        this.menuClose();
      });

   }


  checkMail(): boolean {
    this.reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (this.email == '' || !this.reg.test(this.email))
  }

  ngOnInit() {
    this.randomNumber='';
    this.captchacode='';

  this.randomNumber=this.tools.generateRandomNumber();
  }



  sendMail() {
    var msg = ''
    this.errClr();

    if (this.name =='') {
      msg = msg + 'Please enter Full name'
     this.nameErr = 'Please enter Full name'
   } else if (this.name.length < 3) {
      msg = msg + 'Full name should be at least 3 letters long and without any space'
     this.nameErr = 'Full name should be at least 3 letters long and without any space'
   }else if (this.contactno =='') {
        msg = msg + 'Please enter contact number'
        this.contactnoErr= 'Please enter contact number'
  } else if (this.contactno.length != 10) {
        msg = msg + 'Please enter valid contact number'
        this.contactnoErr= 'Please enter valid contact number'
  }else if (this.captchacode =='') {
  msg = msg + 'Please enter Captcha Code'
  this.captchacodeErr= 'Please enter Captcha Code'
  } else if (this.randomNumber != this.captchacode) {
    
    this.captchacode="";
    this.randomNumber=this.tools.generateRandomNumber();

    msg = msg + 'Please enter valid Captcha Code'
    this.captchacodeErr= 'Please enter valid Captcha Code'
} 

    if (msg != '') {
    //  this.errorMsg=msg;
  // this.tools.openAlert(msg);
    } else {
      this.errClr();
    
      if (this.tools.isNetwork()) {
        this.tools.openLoader();
        this.apiService.SendConatctQuery(this.name,this.contactno).subscribe(response => {
          let res: any = response;
          if(res.status){
            this.errClr();
            this.tools.closeLoader();
            this.tools.presentAlert('',res.message, 'Ok');
            removeMenu();
            this.name='';
            this.contactno='';
            this.captchacode='';
            
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

  errClr() {
      this.nameErr='';
      this.contactnoErr='';
      this.captchacodeErr='';
    }
  
  onSchemeDetails(item){
    localStorage.setItem('schemeId',item.SchemeGroupID)
    localStorage.setItem('TYPE','SchemeGroup')
    localStorage.setItem('Tittle',item.SchemeGroup)
    
    this.route.navigateByUrl('/schemedetailslist')
   
   }

  onInstiDetails(item){
    localStorage.setItem('InstituteId',item.InstituteID)
    localStorage.setItem('TYPE','Institute')
    localStorage.setItem('Tittle',item.InstituteName)
    this.route.navigateByUrl('/schemedetailslist');

    }


  ionViewWillEnter() {
    this.menu.enable(false);
  }
  
 async LoginClick() {  
  this.menuClose();
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
    this.menuClose();
    const modal = await this.modalCtrl.create({  
      component: RegisterPage ,
            cssClass: 'register-modal',

    });  
    modal.onDidDismiss().then(result => {
      console.log(result.data);
      if(result.data =='login'){
        this.LoginClick();
       }
       if(result.data =='OTPPage'){
        this.openOtp();
       }
    });

    return await modal.present();  
  }

  async openOtp() {
    this.menuClose();
    const modal = await this.modalCtrl.create({  
      component: OtpverificationPage ,
            cssClass: 'login-modal',

    });  
    modal.onDidDismiss().then(result => {
      if(result.data =='login'){
        this.LoginClick();
       }
       if(result.data =='register'){
        this.openRegister();
       }
    });

    return await modal.present();
  }

  OnOrgClick(){
    this.route.navigateByUrl('/institutelist');
  }

   async OnConnectClick(){
    this.route.navigateByUrl('/schemegrouplist');

  //   if (!this.isLogin) {

  //     const alert = await this.alertController.create({
  //       message: 'Coming Soon',
  //       buttons: [
  //           {
  //               text: 'OK',
  //               role: 'OK',
  //               handler: () => {
    
  //               }
  //           },
  //       ], backdropDismiss: false
  //   });
  //   alert.present();
  //   }else
  // this.route.navigateByUrl('/schemegrouplist');


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

 

  onInstituteClick(){
    this.route.navigateByUrl('/institutelist');

  }

  onSchemeGroupClick(){
    this.route.navigateByUrl('/schemegrouplist');
  }


  ionViewDidEnter() {
    this.getBannerCall();
    this.InstiSlider.update();
    this.GroupSlider.update();
}

  scrollTo(elementId:string) {
    let todayItem = document.getElementById(elementId);
    todayItem.scrollIntoView(true);
    this.menuClose();
    // this.menu.enable(false); 
    // this.content.scrollTo(0, todayItem.offsetTop, 1000);
  }

  menuClose() {
    if(this.checkScreen() != 4)
    this.menu.close();
  }

  onInstituteList(item){
    this.getInstitutetypeList(item.InstituteTypeID);
   }

  getBannerCall() {
    if (this.tools.isNetwork()) {
      this.tools.openLoader();
      console.log('getSGLISTCall');
      this.apiService.getHomeBanner().subscribe(response => {
        console.log('getBanner_RESPONSE>>>');
        let res: any = response;
        this.getInstitutetype();
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

  getInstitutetype() {
    if (this.tools.isNetwork()) {
      console.log('getSGLISTCall');
      this.apiService.getInstituteType().subscribe(response => {
        console.log('getInstitutetype_RESPONSE>>>');
        let res: any = response;

        if(res.status){
          this.InstituteType = res.data;
          this.getSGLISTCall();
          this.sliderType = res.data[0].InstituteType;
          this.getInstitutetypeList(res.data[0].InstituteTypeID);

        }else{
          this.InstituteType=res.message
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

  getInstitutetypeList(ID) {
    if (this.tools.isNetwork()) {
      console.log('getSGLISTCall');
      this.apiService.getInstituteTypeList(ID).subscribe(response => {
        console.log('RESPONSE>>>');
        let res: any = response;
        if (res.status) {
          this.slideItem = res.data;
        } else {
          this.slideItem = res.message
        }
        console.log(res)
      }, (error: Response) => {
        console.log('ERORR>>>');
        let err: any = error;
        console.log('Error ', err);
        this.tools.openAlertToken(err.status, err.error.message);

      });
    }
  }

  getSGLISTCall() {
    if (this.tools.isNetwork()) {
      console.log('getSGLISTCall');
      this.apiService.getHomeSchemeGroup().subscribe(response => {
        console.log('getSGLISTCall_RESPONSE>>>');
        this.tools.closeLoader();
        let res: any = response;
        if(res.status){
          this.GroupslideItem = res.data;
        }else{
          this.GroupslideItem=res.message
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

  // DDClick(){
  //   this.route.navigateByUrl('/donordashboard', { replaceUrl: true });

  // }
  async DDClick(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      translucent: true,
      animated: true,  
      showBackdrop: true  
    });
    return await popover.present();
  }

  onrecaptcha(){
    this.captchacode='';
    this.randomNumber='';
  
    this.randomNumber=this.tools.generateRandomNumber();
  }
}
