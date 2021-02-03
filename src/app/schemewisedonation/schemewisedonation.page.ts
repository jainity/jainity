import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schemewisedonation',
  templateUrl: './schemewisedonation.page.html',
  styleUrls: ['./schemewisedonation.page.scss'],
})
export class SchemewisedonationPage implements OnInit {

  keyword=""
  items:any=[];
  constructor(private location: Location) { 
    
    for(let i = 0; i <= 4; i++){
      this.items.push('SCHEME GROUP Wise Donation '+(i+1));
    }
  }


  onEnter(event) {

  }

  clearSearch(event) {

  }
  getItems(event) {

  }

  ngOnInit() {
  }


  onBackClick(){
    this.location.back();
   }
}
