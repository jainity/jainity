import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare const removeMenu:any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
   constructor(
    private platform: Platform,private route: Router,
    private splashScreen: SplashScreen, public loadingController: LoadingController,
    private statusBar: StatusBar
  ) {

  
    this.initializeApp();
  }

  async openLoader(cssClass = '', msg?) {
    // console.log(' ===> ',msg);
           
 let loading = await this.loadingController.create({
        message: msg ? msg : '',
        cssClass: cssClass,
    });
    await loading.present();

    setTimeout(() => {
        loading.dismiss();
        // this.route.navigateByUrl('/home', { replaceUrl: true });
    }, 100);
}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(localStorage.getItem('isFirst') == undefined){
        localStorage.setItem('isFirst','true')
        this.openLoader();
      }
    });
  }
}
