import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.page.html',
  styleUrls: ['./institute.page.scss'],
})
export class InstitutePage implements OnInit {
  items:any=[]
  constructor(private route: Router) { 
    
    for (let i = 0; i < 10; i++) {
    this.items.push('INSTITUTE '+(i+1));
  }

   }

   onInstiDetails(item){
    this.route.navigate(['/schemedetails',{item:item}])
    //this.route.navigate(['/schemedetails']);
    }

  ngOnInit() {
  }

}
