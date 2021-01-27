import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-instiwisedonation',
  templateUrl: './instiwisedonation.page.html',
  styleUrls: ['./instiwisedonation.page.scss'],
})
export class InstiwisedonationPage implements OnInit {

  items:any=[];
  constructor(private location: Location) { 
    for(let i = 0; i <= 4; i++){
      this.items.push('Institute Wise Donation '+(i+1));
    }
  }

  ngOnInit() {
  }

  onBackClick(){
    this.location.back();
   }

}
