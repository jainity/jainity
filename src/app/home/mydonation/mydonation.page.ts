import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mydonation',
  templateUrl: './mydonation.page.html',
  styleUrls: ['./mydonation.page.scss'],
})
export class MydonationPage implements OnInit {

  items:any=[]
  constructor(private route: Router) { 
    for (let i = 0; i < 10; i++) {
      this.items.push('MY DONATION '+(i+1));
    }
  }

  ngOnInit() {
  }
  
  onReceiptClick(){
    this.route.navigate(['/reciept']);
  }
}
