import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Tools } from '../shared/tools';

@Component({
  selector: 'app-schemedetails',
  templateUrl: './schemedetails.page.html',
  styleUrls: ['./schemedetails.page.scss'],
})
export class SchemedetailsPage implements OnInit {

  SchemeList =[];
  pageMsg = '';

  SGid:any;
  INid:any;

  Type:any;
  Tittle:any;


  constructor(private route: Router,public router: ActivatedRoute,public alertController: AlertController, public apiService: ApiService,public formBuilder: FormBuilder,
    private apiServices: ApiService,public tools: Tools,private location: Location,
    public toastController: ToastController) {

      localStorage.removeItem('Name');
      localStorage.removeItem('AMT');

      this.SGid=localStorage.getItem('schemeId');
      this.INid=localStorage.getItem('InstituteId');
      this.Type=localStorage.getItem('TYPE');
      this.Tittle=localStorage.getItem('Tittle');
   }


   onDonateClick(item){
    var msg = ''
console.log('Selected Item ',item)
    if (item.amount ==undefined || item.amount =='') {
      msg = msg + 'Please enter Amount <br/>'
    }
    
    if (msg != '') {
      this.tools.openAlert(msg);
    } else {
      if(parseFloat(item.amount)<=100000){
        localStorage.setItem('Name',this.Tittle)
      localStorage.setItem('RazorpayMID',item.RazorpayMID)
      localStorage.setItem('AMT',item.amount) 
      localStorage.setItem('SchemeDesc',item.SchemeDesc)
      localStorage.setItem('InstituteSchemeID',item.InstituteSchemeID)
      localStorage.setItem('InstituteID',item.InstituteID)
      localStorage.setItem('SchemeName',item.SchemeName)

      this.route.navigateByUrl('/paymentconfir')
      }
      else{
        this.tools.openAlert('Donation amount cannot be greater 1 lakh rupees');
      }
      
    }
      

  }

   ionViewDidEnter() {
    this.getSGDTLLISTCall();
}

getSGDTLLISTCall() {
    if (this.tools.isNetwork()) {
      this.tools.openLoader();
      console.log('getSGLISTCall');
      this.apiServices.getSchemeWiseDetailList(this.Type,(this.Type=='Institute')?this.INid:this.SGid).subscribe(response => {
        console.log('RESPONSE>>>');

        this.tools.closeLoader();
        let res: any = response;
        if(res.status){
          this.SchemeList = res.data;
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
       this.tools.openAlertToken(err.status, err.error.message);
  
      });
    } else {
      console.log('ELSE>> ');
      this.tools.closeLoader();
    }
  }

  onSearchClick() {   
    this.route.navigateByUrl('/searchitem');

  }

   ngOnInit() {}

   onEnter(event) {}

  clearSearch(event) {}
  getItems(event) {}
 
 onBackClick(){
  this.location.back();
 }

}
