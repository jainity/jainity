import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Tools } from '../shared/tools';

@Component({
  selector: 'app-schemewisedonation',
  templateUrl: './schemewisedonation.page.html',
  styleUrls: ['./schemewisedonation.page.scss'],
})
export class SchemewisedonationPage implements OnInit {

  keyword=""
  Schemewise=[];
    pageMsg = 'Data not available';
    SCMTotalCount:any = "";

    constructor(private location: Location,private route: Router,public alertController: AlertController, public apiService: ApiService,public formBuilder: FormBuilder,
      private apiServices: ApiService,public tools: Tools,
      public toastController: ToastController) { 
    
    }

    ionViewDidEnter() {
      this.getSchemewise();
  }
  
  getSchemewise() {
    if (this.tools.isNetwork()) {
      this.tools.openLoader();
      this.apiServices.getSchemeWiseDonationList().subscribe(response => {
        console.log('RESPONSE>>>');
  
        this.tools.closeLoader();
        let res: any = response;
        if(res.data !=undefined){
          this.SCMTotalCount=res.TotalAmount
          this.Schemewise = res.data;
        }else{
          this.pageMsg=res.message
        }
        console.log(res)
      }, (error: Response) => {
        console.log('ERORR>>>');
        this.tools.closeLoader();
        this.tools.closeLoader();
        let err:any = error;
        console.log('Error ', err);
       // this.tools.openAlertToken(err.status, err.error.message);
  
      });
    } else {
      console.log('ELSE>> ');
      this.tools.closeLoader();
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
