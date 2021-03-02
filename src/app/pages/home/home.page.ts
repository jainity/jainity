import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('InstiSlider')  InstiSlider: IonSlides
  @ViewChild('GroupSlider')  GroupSlider: IonSlides

  @ViewChild('content') content: any;
  
  
  sliderType='Dehrasar'
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

  constructor() {

    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Amizara Vasupujya ',loc:'Ghatkopar'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Munisvrat Derasar ',loc:'Matunga'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Shantinath Derasar ',loc:'Sion'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Parshvanath Derasar ',loc:'Borival'})

    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Amizara Vasupujya ',loc:'Ghatkopar'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Munisvrat Derasar ',loc:'Matunga'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Shantinath Derasar ',loc:'Sion'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Parshvanath Derasar ',loc:'Borival'})

    this.TopslideItem.push({img:'../../../assets/img/slider.jpg'})
    this.TopslideItem.push({img:'../../../assets/img/slidedemo.jpg'})
    this.TopslideItem.push({img:'../../../assets/img/slidesdemoo.jpg'})

    this.GroupslideItem.push({img:'../../../assets/img/1.png ',title:'Dev Draviya',loc:'(Gujarat)'})
    this.GroupslideItem.push({img:'../../../assets/img/2.png',title:'Sarva Sadharan',loc:'(Gujarat)'})
    this.GroupslideItem.push({img:'../../../assets/img/3.png',title:'Gyan Puja',loc:'(Gujarat)'})

    this.GroupslideItem.push({img:'../../../assets/img/1.png ',title:'Dev Draviya',loc:'(Gujarat)'})
    this.GroupslideItem.push({img:'../../../assets/img/2.png',title:'Sarva Sadharan',loc:'(Gujarat)'})
    this.GroupslideItem.push({img:'../../../assets/img/3.png',title:'Gyan Puja',loc:'(Gujarat)'})

   }

  ngOnInit() {
  }
  scrollTo(elementId:string) {
    let todayItem = document.getElementById(elementId);
    todayItem.scrollIntoView(true);
    // this.content.scrollTo(0, todayItem.offsetTop, 1000);
  }


}
