import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { userInfo } from 'os';
import { ApiService } from '../services/api.service';
import { Tools } from '../shared/tools';
import { Location } from '@angular/common';

@Component({
  selector: 'app-paymentconfir',
  templateUrl: './paymentconfir.page.html',
  styleUrls: ['./paymentconfir.page.scss'],
})
export class PaymentconfirPage implements OnInit {

  NAME:any;
  AMT:any;

  Rname:any = "";
  emailid:any = "";
user:any;

  constructor(private route: Router,public router: ActivatedRoute,public alertController: AlertController, public apiService: ApiService,public formBuilder: FormBuilder,
    public tools: Tools,private location: Location,
    public toastController: ToastController) {
   
    this.user= this.apiService.getUserData();

    this.NAME=localStorage.getItem('Name');
    this.AMT=localStorage.getItem('AMT');
    this.Rname=this.user.first_name +' '+this.user.last_name;
   }

  onpaynowClick(){

    var msg = ''

      
    if (this.Rname =='') {
      msg = msg + 'Please enter Reciept name<br />'
    } else if (this.Rname.length != 3) {
      msg = msg + 'First Reciept should be at least 3 letters long and without any space<br />'
    }else if (this.emailid =='') {
      msg = msg + 'Please enter Email ID<br />'
    } 

    if (msg != '') {
      this.tools.openAlert(msg);
    } else {
      //ahead code here
    }

   }

  ngOnInit() {
    
  }

  onBackClick(){
    this.location.back();
   }

}
