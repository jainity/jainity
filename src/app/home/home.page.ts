import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Tools } from '../shared/tools';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  keyword=""


  constructor(public alertController: AlertController, public apiService: ApiService,private router: Router, public route: ActivatedRoute,public formBuilder: FormBuilder,public tools: Tools, public toastController: ToastController) {
      localStorage.removeItem('reciept');
    }
  

  clearSearch(event) {

  }
  getItems(event) {

  }
  
  onLogoutClick() {   
    this.presentLogout('Are you sure you want to logout?', 'Logout', 'Cancel')
  }
  onSearchClick() {   
    this.router.navigateByUrl('/searchitem');

  }
  async presentLogout(message, btnYes, btnNo) {
    const alert = await this.alertController.create({
        message: message,
        buttons: [
            {
                text: btnNo ? btnNo : 'Cancel',
                role: 'cancel',
                handler: () => {

                }
            },
            {
                text: btnYes ? btnYes : 'Yes',
                handler: () => {
                    //this.callLogout(true);
                    localStorage.clear();
                    this.router.navigateByUrl('/login', { replaceUrl: true });
                }
            }
        ], backdropDismiss: false
    });
    return await alert.present();
}
callLogout(isShow) {
    
  if (this.tools.isNetwork()) {
    if(isShow)
    this.tools.openLoader();
        this.apiService.logout().subscribe(response => {
          this.tools.closeLoader();
          let res: any = response;
          console.log('response ', res);
         if(res.status){
           localStorage.setItem('userdata','');
           localStorage.setItem('login_token','');
           localStorage.clear();
           this.router.navigateByUrl('/login', { replaceUrl: true });
         }else{
           this.tools.presentAlert('',res.message,'Ok');
         }

        }, (error: Response) => {
          this.tools.closeLoader();
          console.log('Error ', error);
        });
      }
  }
}
