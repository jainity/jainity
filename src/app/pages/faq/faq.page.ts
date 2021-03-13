import { OtpverificationPage } from '../../otpverification/otpverification.page';
import { RegisterPage } from '../../register/register.page';
import { LoginPage } from '../../login/login.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Tools } from '../../shared/tools';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  
  isLogin=false;
  DonorfaqList=[];
  InstitutefaqList=[];

  constructor(private route: Router,public alertController: AlertController,
     public apiService: ApiService,
    public tools: Tools,public modalCtrl: ModalController) {

      this.tools.closeLoader();
      this.isLogin = this.apiService.getUserData() !=undefined;

//Donor Query
      this.DonorfaqList.push({name:'How do I donate on Jainity?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'true'})
      this.DonorfaqList.push({name:'Do I need to enter my PAN while donating?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Can I donate via cheque or cash?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'When will I get a receipt for my donation?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'How to download consolidated donations receipts?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'How do I know my transaction is secure?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Which payment methods are allowed?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'What is a verification report?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Will I get a report to know more about the program that I have donated to?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'How do you verify that my donations are being used the right way?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'I have donated to the wrong project. What should I do?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Can I establish contact with the beneficiary?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Do the donors get 80G certificate on the donations they make?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'How do I know if my donation has reached the program that I am supporting?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Can I support more than one cause?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'The donation I made is not reflecting on your platform, but the amount has already been deducted from my bank account. What is wrong?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'don’t seem to remember my password, how do I log in?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Can I receive a refund for my donation?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'How do I deactivate my account on Janity?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Can I make an anonymous donation?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Will I get any tax benefits on the donation?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'I can’t find institute(s) or cause(s) that I want to donate. What can I do?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Can I recommend institute(s) or cause(s)?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'How can I contribute towards Jainity’s mission?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Where can I report issues?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'How does Jainty verify institutes?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.DonorfaqList.push({name:'Can I make donation from a non-Indian account in INR or in foreign currency?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      
//Institute Query
      this.InstitutefaqList.push({name:'What are the eligibility criteria for an institute to be listed on Jainity?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'What is the on-boarding process on Jainity?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'Once published, can I alter my Institute profile?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'What is the process for an NGO to start raising funds using other social media?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'How do I issue receipts and 80G certificates to our donors?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'Can I submit my application materials through email?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'How can I view or update my bank information?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'When will my organization receive the donated amount?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'How can I verify donor identity?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'Can I authorise each transaction in the execution process?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'How can I digitally sign a receipt?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})
      this.InstitutefaqList.push({name:'Can we receive donations from abroad?',description:'There are many variations of passages of Lorem Ipsum available,',isShow:'false'})

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
            this.LoginClick();
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
            this.LoginClick();
           }
           if(result.data =='register'){
            this.openRegister();
           }
        });
    
        return await modal.present();
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

  ngOnInit() {
  }

  ionViewDidEnter() {
  
  }

}
