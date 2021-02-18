import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private loadingController: LoadingController) { }

  loding(value) {

    if (value)
      this.loadingPresent();
    else
      this.loadingDismiss();
  }

  async loadingPresent(message='') {
    const loading = await this.loadingController.create({ message, });
    
    return await loading.present();
  }
  async loadingDismiss() {
    setTimeout(() => {
      return this.loadingController.dismiss();
    }, 100);
  }
}
