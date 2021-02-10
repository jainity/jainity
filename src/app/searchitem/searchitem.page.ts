import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Tools } from '../shared/tools';

@Component({
  selector: 'app-searchitem',
  templateUrl: './searchitem.page.html',
  styleUrls: ['./searchitem.page.scss'],
})
export class SearchitemPage implements OnInit {

  SearchList =[];
  pageMsg = 'Data not available';
  searchTerms:any;

  constructor(private route: Router,public alertController: AlertController, public apiService: ApiService,public formBuilder: FormBuilder,
    private apiServices: ApiService,public tools: Tools,private location: Location,
    public toastController: ToastController) {

    
   }
  ngOnInit() {}

  onDonateClick(item){
    var msg = ''
    console.log('Selected Item ',item)
    if (item.amount ==undefined || item.amount =='') {
      msg = msg + 'Please enter Amount <br/>'
    }
    
    if (msg != '') {
      this.tools.openAlert(msg);
    } else {
      localStorage.setItem('Name',item.SchemeName)
      localStorage.setItem('AMT',item.amount)
 
     this.route.navigate(['/paymentconfir'])
    }
      

  }

  onSearch(){
    if(this.searchTerms.trim() != ''){
    if (this.tools.isNetwork()) {
      this.tools.openLoader();
      console.log('getSGLISTCall');
      this.apiServices.getSearchScheme(this.searchTerms).subscribe(response => {
        console.log('RESPONSE>>>');

        this.tools.closeLoader();
        let res: any = response;
        if(res.status){
          this.SearchList = res.data;
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
  }else{

  }

  }

  onBackClick(){
    this.location.back();
   }
}
