import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('mySlider')  slides: IonSlides
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
  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev();
  }
  slideItem=[];
  constructor() {

    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Amizara Vasupujya ',loc:'Ghatkopar'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Munisvrat Derasar ',loc:'Matunga'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Shantinath Derasar ',loc:'Sion'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Parshvanath Derasar ',loc:'Borival'})

    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Amizara Vasupujya ',loc:'Ghatkopar'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Munisvrat Derasar ',loc:'Matunga'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Shantinath Derasar ',loc:'Sion'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Parshvanath Derasar ',loc:'Borival'})

   }

  ngOnInit() {
  }
  scrollTo(elementId:string) {
    // let yOffset = document.getElementById(elementId).offsetTop;
    // this.content.scrollTo(0, yOffset, 4000)

    // let elem = document.getElementById(elementId);
    // var box = elem.getBoundingClientRect();

    // var body = document.body;
    // var docEl = document.documentElement;

    // var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    // var clientTop = docEl.clientTop || body.clientTop || 0;
    // var top  = box.top +  scrollTop - clientTop;
    // var cDim = this.content.getContentDimensions();

    // var scrollOffset = Math.round(top) + cDim.scrollTop - cDim.contentTop;

    // this.content.scrollTo(0, scrollOffset, 500);
}
  openHome(){
  }
  openAbout(){
  }
  openDonate(){
  }
  openContact(){
  }

}
