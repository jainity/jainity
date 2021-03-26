import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { EventService } from '../services/EventService';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  isLogin=false;

  constructor(private eventServic:EventService,public alertController: AlertController,public popoverCtrl: PopoverController,public apiService: ApiService,private route: Router) { 

    this.isLogin = this.apiService.getUserData() !=undefined;
    this.eventServic.formOtp$.subscribe(() => {
      this.isLogin = this.apiService.getUserData() !=undefined;
    });
  }

  ngOnInit() {}

  onDashboardClick(){
    this.popoverCtrl.dismiss();
    if(this.apiService.getUserData().role_id==2){
      this.route.navigateByUrl('/donordashboard', { replaceUrl: true });
    } else if(this.apiService.getUserData().role_id==3){
      this.route.navigateByUrl('/home', { replaceUrl: true });
    }else{
      this.route.navigateByUrl('/home', { replaceUrl: true });
    }
  }

  onMytransactionClick(){
    this.popoverCtrl.dismiss();
    this.route.navigateByUrl('/donationlist', { replaceUrl: true });
  }
 
  async onlogoutClick(){
    const alert = await this.alertController.create({
     message: 'Are you sure you want to logout?',
     buttons: [
         {
             text: 'Cancel',
             role: 'cancel',
             handler: () => {
              this.popoverCtrl.dismiss();

             }
         },
         {
             text: 'Logout',
             handler: () => {
                 this.isLogin = !this.isLogin;
                 //this.eventServic.publishFormOtp();
                 this.eventServic.publishFormclosemenu();
                 localStorage.clear();
                 this.popoverCtrl.dismiss();
                 this.route.navigateByUrl('/home', { replaceUrl: true });
                 console.log('isLogin>>>noti>>>',this.isLogin);

             }
         }
     ], backdropDismiss: false
 });
 return await alert.present();
  }
}