import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.page.html',
  styleUrls: ['./reciept.page.scss'],
})
export class RecieptPage implements OnInit {

  constructor(private location: Location) {
  
  }

  ngOnInit() {
  }

  onBackClick(){
    this.location.back();
   }

}
