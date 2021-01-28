import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schemedetails',
  templateUrl: './schemedetails.page.html',
  styleUrls: ['./schemedetails.page.scss'],
})
export class SchemedetailsPage implements OnInit {

  keyword=""


  items:any=[];
  amount:any=0;
  getValue: any;
  router: any;

  constructor(private location: Location) {


    for(let i = 0; i <= 4; i++){
       this.items.push('Details'+(i+1));
     }
    
   }

   onEnter(event) {

  }

  clearSearch(event) {

  }
  getItems(event) {
  }
   ngOnInit() {


//this.getValue= this.router.snapshot.paramMap.get("item")
   // console.log(JSON.parse(this.getValue))
}
 onDonateClick(){}

 onBackClick(){
  this.location.back();
 }

}
