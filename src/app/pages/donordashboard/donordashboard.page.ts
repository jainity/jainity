import { OtpverificationPage } from '../../otpverification/otpverification.page';
import { RegisterPage } from '../../register/register.page';
import { LoginPage } from '../../login/login.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Tools } from '../../shared/tools';
import { Chart } from 'chart.js';
import { EventService } from 'src/app/services/EventService';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-donordashboard',
  templateUrl: './donordashboard.page.html',
  styleUrls: ['./donordashboard.page.scss'],
})
export class DonordashboardPage implements OnInit {
  @ViewChild('barChart') barChart;

  
  isLogin=false;
  mydonateList =[];
  donornameList =[];
  SGReportList =[];

  MyContribution:any;
  TotalContribution:any;


  bars: any;
  colorArray: any;

  constructor(private eventServic:EventService,private iab: InAppBrowser,private route: Router,public alertController: AlertController,
     public apiService: ApiService,
    public tools: Tools,public modalCtrl: ModalController) {

      this.isLogin = this.apiService.getUserData() !=undefined;
      this.eventServic.formOtp$.subscribe(() => {
        this.isLogin = this.apiService.getUserData() !=undefined;
      });
      this.generateColorArray(100);

   }

   generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

 async LoginClick() {  

    const modal = await this.modalCtrl.create({  
      component: LoginPage ,
      //componentProps: { id: 5, name: 'gaurav' },
      cssClass: 'login-modal',
      //backdropDismiss: false,
    });  
    modal.onDidDismiss().then(result => {
      console.log(result.data);

      if(result.data =='register'){
       this.openRegister();
      }
      if(result.data =='OTPPage'){
        this.openOtp();
       }
    });
    

    return await modal.present();  
  }  
  
  async openRegister() {
    const modal = await this.modalCtrl.create({  
      component: RegisterPage ,
            cssClass: 'register-modal',

    });  
    modal.onDidDismiss().then(result => {
      console.log(result.data);
      if(result.data =='login'){
        this.openlogin();
       }
       if(result.data =='OTPPage'){
        this.openOtp();
       }
    });

    return await modal.present();  
  }

  async openlogin() {
    const modal = await this.modalCtrl.create({  
      component: LoginPage ,
            cssClass: 'login-modal',

    });  
    modal.onDidDismiss().then(result => {
      if(result.data =='login'){
        this.openlogin();
       }
       if(result.data =='register'){
        this.openRegister();
       }
       if(result.data =='OTPPage'){
        this.openOtp();
       }
    });

    return await modal.present();
  }

  async openOtp() {
    const modal = await this.modalCtrl.create({  
      component: OtpverificationPage ,
            cssClass: 'login-modal',

    });  
    modal.onDidDismiss().then(result => {
      if(result.data =='login'){
        this.openlogin();
       }
       if(result.data =='register'){
        this.openRegister();
       }
       if(result.data =='OTPPage'){
        this.openOtp();
       }
    });

    return await modal.present();
  }


   async OnConnectClick(){
    
    if (!this.isLogin) {

      const alert = await this.alertController.create({
        message: 'Coming Soon',
        buttons: [
            {
                text: 'OK',
                role: 'OK',
                handler: () => {
    
                }
            },
        ], backdropDismiss: false
    });
    alert.present();
    }else
  this.route.navigateByUrl('/Dashboard');
 }


 async LogoutClick(){
   const alert = await this.alertController.create({
    message: 'Are you sure you want to logout?',
    buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {

            }
        },
        {
            text: 'Logout',
            handler: () => {
                //this.callLogout(true);
                this.isLogin = !this.isLogin;
                localStorage.clear();
                this.route.navigateByUrl('/home', { replaceUrl: true });
            }
        }
    ], backdropDismiss: false
});
return await alert.present();
 }

  ngOnInit() {}

  donateclick(){
    this.route.navigateByUrl('/schemegrouplist');
  }

  ionViewDidEnter() {
    this.getDonationcount();
  }

  getDonationcount() {
    if (this.tools.isNetwork()) {
      this.tools.openLoader();
      console.log('getSGLISTCall');
      this.apiService.getDonationCount().subscribe(response => {
        console.log('getDonationCount>>>',response);
        this.getmyDonationLISTCall();
        let res: any = response;
        if (res.status) {
          //this.mydonateList = res.data;
        this.MyContribution=res.MyDonation;
        this.TotalContribution=res.TotalAmount;

        } 
        this.getDonorLISTCall();
        console.log(res)
      }, (error: Response) => {
        console.log('ERORR>>>');
        this.tools.closeLoader();
        let err: any = error;
        console.log('Error ', err);
        this.tools.openAlertToken(err.status, err.error.message);

      });
    }
  }

  getmyDonationLISTCall() {
    if (this.tools.isNetwork()) {
      //this.tools.openLoader();
      console.log('getSGLISTCall');
      this.apiService.getMyDonation('7').subscribe(response => {
        console.log('RESPONSE>>>');
        this.getDonorLISTCall();
        let res: any = response;
        if (res.status) {
          this.mydonateList = res.data;
        } 
        console.log(res)
      }, (error: Response) => {
        console.log('ERORR>>>');
        this.tools.closeLoader();
        let err: any = error;
        console.log('Error ', err);
        this.tools.openAlertToken(err.status, err.error.message);

      });
    } 
  }

  getDonorLISTCall() {
    if (this.tools.isNetwork()) {
     // this.tools.openLoader();
      console.log('getSGLISTCall');
      this.apiService.getDonor().subscribe(response => {
        console.log('RESPONSE>>>');

        this.getSchemGroupWiseLIST();
        let res: any = response;
        if (res.status) {
          this.donornameList = res.data;
        } 
        console.log(res)
      }, (error: Response) => {
        console.log('ERORR>>>');
        this.tools.closeLoader();
        let err: any = error;
        console.log('Error ', err);
        this.tools.openAlertToken(err.status, err.error.message);

      });
    } 
  }

  getSchemGroupWiseLIST() {
    if (this.tools.isNetwork()) {
     // this.tools.openLoader();
      console.log('getSGLISTCall');
      this.apiService.getSchemeGroupWiseReport().subscribe(response => {

        this.tools.closeLoader();
        let res: any = response;
        if (res.status) {
          this.SGReportList = res.data;
        } 
        this.createBarChart();
        console.log(res)
      }, (error: Response) => {
        console.log('ERORR>>>');
        this.tools.closeLoader();
        let err: any = error;
        console.log('Error ', err);
        this.tools.openAlertToken(err.status, err.error.message);

      });
    } 
  }

  createBarChart() {
    let ctx = this.barChart.nativeElement;
    ctx.height = 230;
  
    this.bars = new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: ['India', 'Canada', 'China', 'Brazil', 'Russia', 'Others'],
       labels: this.SGReportList.map(function(item) {
        return item['SchemeGroup'];
      }),
        datasets: [{
          //label: 'Viewers in millions',
          data: this.SGReportList.map(function(item) {
            return item['Total']/100;
          }),
          backgroundColor: this.colorArray, // array should have same number of elements as number of dataset
          borderColor: this.colorArray,// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  viewallClick(){
    this.route.navigateByUrl('/donationlist');

  }

  onviewreceiptClick(item){
    this.openReceipt(item.PDFUrl)
  }

  openReceipt(PDFUrl) {
    localStorage.setItem('reciept', PDFUrl);
    if (PDFUrl != undefined && PDFUrl != '') {

      const browserPay = this.iab.create(PDFUrl, '_blank', {});
      // browserPay.on("loadstart").subscribe((event) => {
      //   // console.log('Pay Data loadstart url ',event.url);
      // });
      browserPay.on("exit").subscribe(
        (event) => {

        }
      );
    } else {
      this.tools.openAlert('Receipt not found!');
    }
  }
}
