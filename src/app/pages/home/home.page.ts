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
  
  
  sliderType:any;
  
  slideOpts ={
    slidesPerView: 4,
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
    speed: 700,
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      shadowOffset: 20,
      depth: 100,
      modifier: 1,
      slideShadows: true,
     
    }
 
  }

  // OnConnectClick(){
  //   this.route.navigateByUrl('/login', { replaceUrl: false });
  // }
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


    // this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Amizara Vasupujya ',loc:'Ghatkopar'})
    // this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Munisvrat Derasar ',loc:'Matunga'})
    // this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Shantinath Derasar ',loc:'Sion'})
    // this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Parshvanath Derasar ',loc:'Borival'})

    // this.TopslideItem.push({img:'../../../assets/img/slider.jpg'})
    // this.TopslideItem.push({img:'../../../assets/img/slidedemo.jpg'})
    // this.TopslideItem.push({img:'../../../assets/img/slidesdemoo.jpg'})

   }

   async OnConnectClick() {  

    const modal = await this.modalCtrl.create({  
      component: LoginPage ,
      //componentProps: { id: 5, name: 'gaurav' },
      //cssClass: 'setting-modal',
      //backdropDismiss: false,
    });  
    modal.onDidDismiss().then(result => {
      console.log(result.data);
    });
    

    return await modal.present();  
  }  

  ngOnInit() {}

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
