import { OtpverificationPage } from './../../otpverification/otpverification.page';
import { RegisterPage } from './../../register/register.page';
import { LoginPage } from './../../login/login.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Tools } from 'src/app/shared/tools';

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
  email = '';
  subject = '';
  message = '';
  nameErr = '';
  emailErr = '';
  subjectErr = '';
  messageErr = '';
  reg:any;

  slideOpts ={
    slidesPerView: this.checkScreen(),
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      shadowOffset: 20,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
    // cubeEffect: {
    //   shadow: true,
    //   slideShadows: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94,
    // }
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


  constructor(private route: Router,public alertController: AlertController,
     public apiService: ApiService,public formBuilder: FormBuilder,
    public tools: Tools,public modalCtrl: ModalController) {

      this.tools.closeLoader();
      this.isLogin = this.apiService.getUserData() !=undefined;

//      console.log(,this.apiService.getUserData())

    // this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Amizara Vasupujya ',loc:'Ghatkopar'})
    // this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Munisvrat Derasar ',loc:'Matunga'})
    // this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Shantinath Derasar ',loc:'Sion'})
    // this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Parshvanath Derasar ',loc:'Borival'})

    // this.TopslideItem.push({img:'../../../assets/img/slider.jpg'})
    // this.TopslideItem.push({img:'../../../assets/img/slidedemo.jpg'})
    // this.TopslideItem.push({img:'../../../assets/img/slidesdemoo.jpg'})

   }

   checkMail(): boolean {
    this.reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (this.email == '' || !this.reg.test(this.email))
  }

  sendMail(){

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


  ionViewDidEnter() {
    this.getBannerCall();
}

  scrollTo(elementId:string) {
    let todayItem = document.getElementById(elementId);
    todayItem.scrollIntoView(true);
    // this.content.scrollTo(0, todayItem.offsetTop, 1000);
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

        //this.tools.closeLoader();
        let res: any = response;
        this.getInstitutetype();
        this.getSGLISTCall();

        if(res.status){
          this.TopslideItem = res.data;
        }else{
          this.TopslideItem=res.message
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

  getInstitutetype() {
    if (this.tools.isNetwork()) {
      //this.tools.openLoader();
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

       // this.tools.closeLoader();
        let res: any = response;
        if (res.status) {
          this.slideItem = res.data;
        } else {
          this.slideItem = res.message
        }
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

  getSGLISTCall() {
    if (this.tools.isNetwork()) {
      //this.tools.openLoader();
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

}
