import { Network } from '@ionic-native/network/ngx';
import { ToastController, LoadingController, AlertController, NavController, PopoverController, MenuController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NotificationsComponent } from '../notifications/notifications.component';
@Injectable()
export class Tools {
   
    notification;
    loading;
    isShowing =false;

    constructor(
        private menu: MenuController, 
        public popoverCtrl: PopoverController,
        public alertController: AlertController,
        public toastController: ToastController, public network: Network,
        public loadingController: LoadingController, public router: Router,private navCtrl: NavController,
    ) {
      
    }

    isValidNumber(event)
    {
        //return /\d|Backspace/.test(event.key);
        if ([8, 13, 27, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
            // backspace, enter, escape, arrows
            return true;
        } else if (event.keyCode >= 48 && event.keyCode <= 57) {
            // numbers 0 to 9
            return true;
        } else if (event.keyCode >= 96 && event.keyCode <= 105) {
            // numpad number
            return true;
        }
        return false;
    }
    backPage(){
        this.navCtrl.back();
    }
  
    goHome(){
        this.router.navigateByUrl('/home',{replaceUrl:true});
       }
       goSchemeGroup(){
        this.router.navigateByUrl('/schemegrouplist',{replaceUrl:true});
        this.menuClose();
       }

       async OpenSidePopup(ev: any) {
        const popover = await this.popoverCtrl.create({
          component: NotificationsComponent,
          event: ev,
          translucent: true,
          animated: true,  
          showBackdrop: true  
        });
        return await popover.present();
      }
//*************************************************** new implements */


checkScreen() {
    let innerWidth = window.innerWidth;
    console.log('Inner Width ',innerWidth);
    switch (true) {
      case 340 <= innerWidth && innerWidth <= 400:
        return 1;
      case 401 <= innerWidth && innerWidth <= 700:
        return 2;
      case 701 <= innerWidth && innerWidth <= 900:
        return 3;
      case 901 <= innerWidth:
        return 4;
    }
  }

  scrollTo(elementId:string) {
    let todayItem = document.getElementById(elementId);
    todayItem.scrollIntoView(true);
    this.menuClose();
    // this.menu.enable(false); 
    // this.content.scrollTo(0, todayItem.offsetTop, 1000);
  }

  menuClose() {
    if(this.checkScreen() != 4)
    this.menu.close();
  }

//   openFirst() {
//     this.menu.enable(true, "first"); 
//     this.menu.open("first");
//   }


//*************************************************** new implements */


  goTAC(){
    this.router.navigateByUrl('/termsandcondition');
   }

   goPP(){
    this.router.navigateByUrl('/privacypolicy');
   }

   goDisclaimer(){
    this.router.navigateByUrl('/declaimer');
   }

   goFAQ(){
    this.router.navigateByUrl('/faq');

   }

    isNetwork(){
       // this.closeLoader();
        if (this.network.type == 'none') {
            this.presentAlert('No internet', 'You do not have an Internet connection. Please check your connection status', 'Ok')
            return false;
        } else {
            return true;
        }
    }
    formatephone(phonenumber) {
        // tslint:disable-next-line:prefer-const
        let phonestring = phonenumber.replace(/[^a-zA-Z0-9]/g, '');
        // tslint:disable-next-line:prefer-const
        let formatednumber = phonestring.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        return formatednumber;
    }


    async openNotification(options) {
        this.notification = await this.toastController.create({
            message: options.message,
            duration: options.duration ? options.duration : 3000,
            position: options.position ? options.position : 'top',
            cssClass: options.class ? options.class : 'info'
        });
        this.notification.present();
    }
    
    async formateDateyyyymmddhis(date) {
        // tslint:disable-next-line:prefer-const
        let mm = ('0' + (date.getMonth() + 1)).slice(-2);
        // tslint:disable-next-line:prefer-const
        let dd = ('0' + (date.getDate())).slice(-2);
        // tslint:disable-next-line:prefer-const
        let yyyy = date.getFullYear();
        // tslint:disable-next-line:prefer-const
        let h = ('0' + (date.getHours())).slice(-2);
        // tslint:disable-next-line:prefer-const
        let i = ('0' + (date.getMinutes())).slice(-2);
        // tslint:disable-next-line:prefer-const
        let s = ('0' + (date.getSeconds())).slice(-2);
        // tslint:disable-next-line:prefer-const
        let today = yyyy + '-' + mm + '-' + dd + ' ' + h + ':' + i + ':' + s;
        return today;
    }

    async formateDay(today) {
        let dd = today.getDate();
        // tslint:disable-next-line:prefer-const
        let yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // January is 0!

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    async formatAMPM1(date) {
        // console.log(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        // tslint:disable-next-line:prefer-const
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // tslint:disable-next-line:prefer-const
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    async formatAMPM(date) {
        let hours = date.getUTCHours();
        let minutes = date.getUTCMinutes();
        // tslint:disable-next-line:prefer-const
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // tslint:disable-next-line:prefer-const
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    async openLoader(cssClass = '', msg?) {
        // console.log(' ===> ',msg);
        // if (!this.isShowing) {
        //     this.isShowing = true;
               
    this.loading = await this.loadingController.create({
            message: msg ? msg : '',
            cssClass: cssClass,
        });
        await this.loading.present();
    // }else {
    //     this.isShowing = true;
    //   }
        // setTimeout(() => {
        //     this.loading.dismiss();
        // }, 2000);
    }

    generateRandomNumber(){

        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
    
          // var rand=min+Math.random()*(max-min);
          // rand=Math.round(rand);
          // return rand.toString();
      }
      
    async openAlert(message) {
        const alert = await this.alertController.create({
            message: message ? message : 'This is an alert message.',
            buttons: ['OK'],
            backdropDismiss: false
        });
        return await alert.present();
    }
    async openAlertToken(status,message) {
        console.log('Api Status ',status)
        const alert = await this.alertController.create({
            message: message ? message : 'This is an alert message.',
            buttons:  [
                {
                    text: status==401?'Login':'Ok',
                    handler: () => {
                        if(status==401){
                            localStorage.setItem('userdata','');
                            localStorage.setItem('login_token','');
                            localStorage.clear();
                            this.router.navigateByUrl('/login', { replaceUrl: true });            
                                    }
                    }
                }
            ],
            backdropDismiss: false
        });
        return await alert.present();
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
                        localStorage.setItem('userdata','');
                        localStorage.setItem('login_token','');
                        localStorage.clear();
                        this.router.navigateByUrl('/login', { replaceUrl: true });
                    }
                }
            ], backdropDismiss: true
        });
        return await alert.present();
    }
    async presentAlertToLogin(title, msg, btnOk) {
        if(this.loading != undefined)
        this.loading.dismiss();
        const alert = await this.alertController.create({
            header: title,
            message: msg,
            buttons: [
                {
                    text: btnOk,
                    handler: () => {
                        
                        localStorage.setItem('userdata','');
                        localStorage.setItem('login_token','');
                        localStorage.clear();
                        this.router.navigateByUrl('/login', { replaceUrl: true });
                    }
                }
            ]
        });
        await alert.present();
    }
    

    async donatepresentAlert(title, msg, btnOk,isMove?) {
        if(this.loading ! =undefined) 
        this.loading.dismiss();
        const alert = await this.alertController.create({
            header: title,
            message: msg,
            buttons: [
                {
                    text: btnOk,
                    handler: () => {
                        if(isMove)
                        this.router.navigateByUrl('/schemegrouplist', { replaceUrl: true });
                    }
                }
            ]
        });
        await alert.present();
    }

    async presentAlert(title, msg, btnOk,isMove?) {
        if(this.loading ! =undefined) 
        this.loading.dismiss();
        const alert = await this.alertController.create({
            header: title,
            message: msg,
            buttons: [
                {
                    text: btnOk,
                    handler: () => {
                        if(isMove)
                        this.router.navigateByUrl('/home', { replaceUrl: true });
                    }
                }
            ]
        });
        await alert.present();
    }

    async presentConfirm(message, btnYes, btnNo) {
        const alert = await this.alertController.create({
            message: message ? message : 'Do you want to buy this book?',
            buttons: [
                {
                    text: btnNo ? btnNo : 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: btnYes ? btnYes : 'Yes',
                    handler: () => {
                        // console.log('Buy clicked');
                    }
                }
            ], backdropDismiss: false
        });
        return await alert.present();
    }
    // closeLoader() {
    //         if(this.loading != undefined)
    //         this.loading.dismiss();
    //     }

    public async closeLoader() {
        await this.loadingController.dismiss();
        await this.loadingController.dismiss();
        await this.loadingController.dismiss();
        await this.loadingController.dismiss();
        await this.loadingController.dismiss();
       }
    dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        } else {
            byteString = unescape(dataURI.split(',')[1]);
        }
        // separate out the mime component
        // tslint:disable-next-line:prefer-const
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        // tslint:disable-next-line:prefer-const
        let ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {
            type: mimeString
        });
    }

    returnImageName(keys, file, blob) {
        let imagename;
        if (blob) {
          imagename = new Date().getTime() + keys + '.jpg';
          blob.lastModified = new Date();
          blob.name = imagename;
        } else {
          imagename = new Date().getTime() + keys + file.name;
        }
        imagename.replace(/_/g, ' ');
        imagename = imagename.replace(/\s+/g, '-');
        imagename = imagename.replace(/%20/g, '_');
        return imagename;
      }
      
}

