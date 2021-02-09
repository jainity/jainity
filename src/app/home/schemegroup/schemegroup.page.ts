import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Tools } from 'src/app/shared/tools';
import { onErrorResumeNext } from 'rxjs';

@Component({
  selector: 'app-schemegroup',
  templateUrl: './schemegroup.page.html',
  styleUrls: ['./schemegroup.page.scss'],
})
export class SchemegroupPage implements OnInit {
  SGList =[];
  pageMsg = 'Data not available';

  constructor(private route: Router,public alertController: AlertController, public apiService: ApiService,public formBuilder: FormBuilder,
    private apiServices: ApiService,public tools: Tools,
    public toastController: ToastController) {
      localStorage.removeItem('schemeId');

  // for (let i = 0; i < 10; i++) {
  //   this.SGList.push('SCHEME GROUP '+(i+1));
  // }

   }

   onSchemeDetails(item){
     localStorage.setItem('schemeId',item.SchemeGroupID)
     localStorage.setItem('TYPE','SchemeGroup')
     localStorage.setItem('Tittle',item.SchemeGroup)
     
    this.route.navigate(['/schemedetails'])
    }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getSGLISTCall();
}

  getSGLISTCall() {
    if (this.tools.isNetwork()) {
      this.tools.openLoader();
      console.log('getSGLISTCall');
      this.apiServices.getSchemeGroup().subscribe(response => {
        console.log('RESPONSE>>>');

        this.tools.closeLoader();
        let res: any = response;
        if(res.data !=undefined){
          this.SGList = res.data;
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
}
