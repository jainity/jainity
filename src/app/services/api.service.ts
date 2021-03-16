import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = '';
  httpOptions: any;
  bacisAuth;

  constructor(private http: HttpClient, public alertController: AlertController,public router: Router,) {
    this.bacisAuth = 'Basic ' + btoa(environment.username + ":" + environment.password);
    this.setHeader();

  }
  setHeader() {
    console.log('getLoginToken ' , this.getLoginToken())
    if (this.getLoginToken() == undefined) {
      console.log('Basic auth ' + this.bacisAuth)
      this.httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Headers': "Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          'Access-Control-Allow-Origin': '*',
          'Authorization': this.bacisAuth,
          'X-JAINITY-API-KEY': environment.apikey,
        })
      };
    } else {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Headers': "Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          'Access-Control-Allow-Origin': '*',
          //'Authorization': this.bacisAuth,
          'X-JAINITY-API-KEY': environment.apikey,
          'User-Id': this.getUserId(),
          'Authorization': 'Bearer '+this.getLoginToken(),
        })
      };

    }
  }
  getLoginToken() {
    if (localStorage['login_token']) {
      return localStorage['login_token'];
    }
    return;
  }
  getUserId() {
    console.log('User Info--> ',this.getUserData())
    if(this.getUserData() !=undefined)
    return this.getUserData().id;
    return "";
  }
  getUserData() {
    console.log('User Data --> ',localStorage['userdata'])
    if (localStorage['userdata']) {
      return JSON.parse(localStorage.getItem('userdata'));
    }
    return;
  }
  setUserData(user) {
    console.log(user)
    if (user != null) {
      return localStorage.setItem('userdata', JSON.stringify(user));
    } else {
      localStorage.removeItem('userdata');
      return user;
    }
  }


  SendOTP(username) {
    let postData = new FormData();
    postData.append("Mobile", username);
    postData.append("device_token", "");
    console.log('Params ',postData);
    return this.http.post(environment.BaseUrl + "auth/send_otp", postData, this.httpOptions);
  }
  VerificationOTP(OTP,Mobile) {
    let postData = new FormData();
    // postData.append('file', imageFile);
    postData.append("OTP", OTP);
    postData.append("Mobile", Mobile);
    postData.append("device_token", "");
    return this.http.post(environment.BaseUrl + "auth/verify_otp", postData, this.httpOptions);
  }
  logout() {
    let postData = new FormData();
    postData.append("DeviceID", "");
    
    return this.http.post(environment.BaseUrl + "auth/logout", postData, this.httpOptions);
  }
  PayemntCall(Rname,Uid,PaymentID,AMT,InstituteSchemeID,InstituteID,SchemeName,MID) {

    let postDataRow =  {
      PayId: PaymentID,
      Amt: AMT,
      Currency: "INR",
      InstituteSchemeID: InstituteSchemeID,
      InstituteID: InstituteID,
      OtherInfo: SchemeName,
      MID: MID,
      RECDisplayName: Rname,
      DonorID: Uid,
  }

    return this.http.post(environment.BaseUrl + "Payment", postDataRow, this.httpOptions);
  }

  Register(RoleId,Fname,Lname,Mobileno) {
    let postData = new FormData();
    postData.append('Role_id', RoleId);
    postData.append("FirstName", Fname);
    postData.append("LastName", Lname);
    postData.append("Mobile", Mobileno);
    postData.append("device_token", "");
    return this.http.post(environment.BaseUrl + "auth/register", postData, this.httpOptions);
  }
  getSchemeWiseDetailList(type,ID) {
    let postData = new FormData();
    
    postData.append((type=='Institute')?"InstituteID":"SchemeGroupID", ID);
    postData.append("device_token", "");
    return this.http.post(environment.BaseUrl + "scheme", postData, this.httpOptions);
  }
  getSearchScheme(search) {
    let postData = new FormData();
    postData.append("search", search);
    return this.http.post(environment.BaseUrl + "scheme/search", postData, this.httpOptions);
  }

  getMyDonation(ID): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "trasaction/?user_id="+ID, this.httpOptions);
  }
  getDonor(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "donor/top_donor", this.httpOptions);
  }

  getSchemeGroupWiseReport(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "report/scheme_group_wise_report", this.httpOptions);
  }
  getDonationCount(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "report/donation_count", this.httpOptions);
  }
  getSchemeGroup(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "scheme_group", this.httpOptions);
  }
  getHomeBanner(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "banner", this.httpOptions);
  }
  getHomeSchemeGroup(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "home_page/scheme_group", this.httpOptions);
  }
  getInstituteType(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "home_page/institute_type", this.httpOptions);
  }
  getInstituteTypeList(ID): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "home_page/institute?InstituteTypeID="+ID, this.httpOptions);
  }

  getInstituteList(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/institute", this.httpOptions);
  }
  getInstituteWiseDonationList(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/report/institute_wise_report", this.httpOptions);
  }
  getSchemeWiseDonationList(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/report/scheme_wise_report", this.httpOptions);
  }

  userData(isShow?): any {
    this.http.get(environment.BaseUrl + "/auth/user_data",  this.httpOptions).subscribe(response => {
      let res: any = response;
      if (res.status) {
        if(isShow){
          if(this.dateDifference((res.data.user).planenddate)<= 0){
            this.openAlert('Your plan expire, please contact to administrator',true);
          }else if(this.dateDifference((res.data.user).planenddate) <= 7 ){
            this.openAlert('Your plan has expire after '+this.dateDifference((res.data.user).planenddate)+' days please contact to administrator',false);
          } 
        }

        localStorage.setItem('userdata',JSON.stringify(res.data.user));
       // this.tools.openAlert('Plan Expire ',res.data.user);
      } 
    }, (error: Response) => {
      let err:any=error;
      console.log('Error ', err.error);
    });
  }

  dateDifference(end) {
    let startDt = new Date();
    let endDt = new Date(end);

    console.log('Date Difference ',((endDt.getTime() - startDt.getTime())/ (24 * 3600 * 1000)));
     return Math.ceil(((endDt.getTime() - startDt.getTime())/ (24 * 3600 * 1000)));
}

  getFrom() {
    if (window.localStorage['from']) {
      return localStorage.getItem('from');
    }
    return;
  }
  
  setFrom(from) {
    if (from != null) {
      return localStorage.setItem('from', from);
    } else {
      localStorage.removeItem('from');
      return from;
    }
  }
  async openAlert(message,isTrue?) {
    const alert = await this.alertController.create({
        message: message ? message : 'This is an alert message.',
        buttons:  [
          {
              text: isTrue?'Login':'Ok',
              handler: () => {
                  if(isTrue){
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

  getKeyPairValue(param) {
    let formBody: any = [];
    // tslint:disable-next-line:forin
    for (let property in param) {
      formBody.push(encodeURIComponent(property) + '=' + encodeURIComponent(param[property]));
    }
    formBody = formBody.join('&');
    return formBody;
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }

}
