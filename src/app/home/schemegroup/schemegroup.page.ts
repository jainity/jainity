import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schemegroup',
  templateUrl: './schemegroup.page.html',
  styleUrls: ['./schemegroup.page.scss'],
})
export class SchemegroupPage implements OnInit {
  items:any=[]
  constructor(private route: Router) {

  for (let i = 0; i < 10; i++) {
    this.items.push('SCHEME GROUP '+(i+1));
  }
   }

   onSchemeDetails(item){
    this.route.navigate(['/schemedetails',{item:item}])
    //this.route.navigate(['/schemedetails']);
    }

  ngOnInit() {
  }

}
