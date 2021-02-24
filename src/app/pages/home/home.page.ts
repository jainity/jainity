import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts ={}
  slideItem=[];
  constructor() {

    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Amizara Vasupujya (Ghatkopar)'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Munisvrat Derasar (Matunga)'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Shantinath Derasar (Sion)'})
    this.slideItem.push({img:'../../../assets/img/slide_img.png',title:'Parshvanath Derasar (Borival)'})

   }

  ngOnInit() {
  }

}
