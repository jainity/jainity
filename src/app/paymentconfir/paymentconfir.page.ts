import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Tools } from '../shared/tools';
import { Location } from '@angular/common';

declare var RazorpayCheckout: any;

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

  RazorpayMID:any = "";
  SchemeDesc:any = "";
  InstituteSchemeID:any;
  InstituteID:any = "";
  SchemeName:any = "";

  currency: string = 'INR';
  currencyIcon: string = '₹';
  // razor_key = 'rzp_test_gvQZfFxrBXARoJ';
  razor_key = 'rzp_live_AaeZGFsxalFwFO';
  //razor_key = 'rzp_live_uhxDubpeOj3IkE';
  cardDetails: any = {};

  constructor(private route: Router,public router: ActivatedRoute,public alertController: AlertController, public apiService: ApiService,public formBuilder: FormBuilder,
    public tools: Tools,private location: Location,
    public toastController: ToastController) {
   
    this.user= this.apiService.getUserData();

    this.NAME=localStorage.getItem('Name');
    this.AMT=localStorage.getItem('AMT');

    this.RazorpayMID=localStorage.getItem('RazorpayMID');
    this.SchemeDesc=localStorage.getItem('SchemeDesc');
    this.InstituteSchemeID=localStorage.getItem('InstituteSchemeID');
    this.InstituteID=localStorage.getItem('InstituteID');
    this.SchemeName=localStorage.getItem('SchemeName');

    this.Rname=this.user.first_name +' '+this.user.last_name;
   }

  onpaynowClick(){

    var msg = ''

      
    if (this.Rname =='') {
      msg = msg + 'Please enter Reciept name<br />'
    } else if (this.Rname.length < 3) {
      msg = msg + 'First Reciept should be at least 3 letters long and without any space<br />'
    }else if (this.emailid =='') {
      msg = msg + 'Please enter Email ID<br />'
    } 

    if (msg != '') {
      this.tools.openAlert(msg);
    } else {
      if(this.RazorpayMID !=''){
        this.payWithRazor();
      }else{
        this.tools.openAlert('Transfer Account Details Not Proper');
      }
    }

   }

  ngOnInit() {
    
  }

  payWithRazor() {
    var options = {
      description: this.SchemeDesc  ,
      image: '../../assets/img/logo.png',
      currency: this.currency,
      key: this.razor_key,
      amount: (parseInt(this.AMT)*100),
      name: this.SchemeName,
      prefill: {
        email: this.emailid,
        contact: this.user.mobile,
        name: this.Rname
      },
      theme: {
        color: '#ef7635'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };
    var self = this;
    var successCallback = function (payment_id) {
      
     // alert('payment_id: ' + payment_id);
     self.PayemntCall(payment_id);

    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }



  PayemntCall(PaymentID){
    if (this.tools.isNetwork()) {
      this.tools.openLoader();
      this.apiService.PayemntCall(this.Rname,this.user.id,PaymentID,(parseInt(this.AMT)*100),this.InstituteSchemeID,this.InstituteID,this.SchemeName,this.RazorpayMID).subscribe(response => {
        this.tools.closeLoader();
        let res: any = response;
        console.log('response ', res);

        if(res.status){
          this.tools.presentAlert('',res.message, 'Ok',true);
        //  this.route.navigate(['/home']);
        }else{
          this.tools.presentAlert('','Something wrong...', 'Ok');
        }
      }, (error: Response) => {
        this.tools.closeLoader();
        console.log('Error ', error);
        let err:any = error;
        this.tools.openAlertToken(err.status, err.error.message);
  
      });
    } else {
      this.tools.closeLoader();
    }
  }

  onBackClick(){
    this.location.back();
   }

}
