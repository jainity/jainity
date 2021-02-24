import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
  slideItem=[];
  constructor() {

    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Amizara Vasupujya ',loc:'Ghatkopar'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Munisvrat Derasar ',loc:'Matunga'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Shantinath Derasar ',loc:'Sion'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Parshvanath Derasar ',loc:'Borival'})

   }

  ngOnInit() {
  }

}
