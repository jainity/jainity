import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Tools } from 'src/app/shared/tools';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.page.html',
  styleUrls: ['./institute.page.scss'],
})
export class InstitutePage implements OnInit {
  INSLIST =[];
  pageMsg = '';

  constructor(private route: Router,public alertController: AlertController, public apiService: ApiService,public formBuilder: FormBuilder,
    private apiServices: ApiService,public tools: Tools,
    public toastController: ToastController)  { 
      this.tools.closeLoader();
      localStorage.removeItem('InstituteId');
  }

   onInstiDetails(item){
    localStorage.setItem('InstituteId',item.InstituteID)
    localStorage.setItem('TYPE','Institute')
    localStorage.setItem('Tittle',item.InstituteName)
    this.route.navigateByUrl('/schemedetails');

    }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.getInstiLISTCall();
}

getInstiLISTCall() {
  if (this.tools.isNetwork()) {
    this.tools.openLoader();
    this.apiServices.getInstituteList().subscribe(response => {
      console.log('RESPONSE>>>');

      this.tools.closeLoader();
      let res: any = response;
      if(res.status){
        this.INSLIST = res.data;
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

}
