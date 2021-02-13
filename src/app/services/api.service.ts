import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Device } from '@ionic-native/device/ngx';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = '';
  httpOptions: any;
  bacisAuth;

  constructor(private device: Device,private http: HttpClient, public alertController: AlertController,public router: Router,) {
    this.bacisAuth = 'Basic ' + btoa(environment.username + ":" + environment.password);
    this.setHeader();

  }
  setHeader() {
    console.log('getLoginToken ' , this.getLoginToken())
    if (this.getLoginToken() == undefined) {
      console.log('Basic auth ' + this.bacisAuth)
      this.httpOptions = {
        headers: new HttpHeaders({
          // 'Accept': 'application/json,',
          // 'Content-Type': 'multipart/form-data',
          // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // 'Content-Type': 'application/json',
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
          // 'Accept': 'application/json',
          // 'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/json',
          // 'Content-Type':'application/x-www-form-urlencoded',
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
    return this.getUserData().id;
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


  stateList() {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/category/state", this.httpOptions);
  }

  SendOTP(username) {
    let postData = new FormData();
    // postData.append('file', imageFile);
    postData.append("Mobile", username);
    postData.append("device_token", this.device.uuid);

    console.log('Params ',postData);

    return this.http.post(environment.BaseUrl + "auth/send_otp", postData, this.httpOptions);
  }
  VerificationOTP(OTP,Mobile) {
    let postData = new FormData();
    // postData.append('file', imageFile);
    postData.append("OTP", OTP);
    postData.append("Mobile", Mobile);
    postData.append("device_token", this.device.uuid);
    return this.http.post(environment.BaseUrl + "auth/verify_otp", postData, this.httpOptions);
  }
  logout() {
    let postData = new FormData();
    postData.append("DeviceID", this.device.uuid);
    
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

  Register(Fname,Lname,Mobileno) {
    let postData = new FormData();
    // postData.append('file', imageFile);
    postData.append("FirstName", Fname);
    postData.append("LastName", Lname);
    postData.append("Mobile", Mobileno);
    postData.append("device_token", this.device.uuid);
    return this.http.post(environment.BaseUrl + "auth/register", postData, this.httpOptions);
  }
  getSchemeWiseDetailList(ID) {
    let postData = new FormData();
    postData.append("SchemeGroupID", ID);
    postData.append("device_token", this.device.uuid);
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

  getSchemeGroup(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "scheme_group", this.httpOptions);
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
  editProfile(postData): any {
    return this.http.post(environment.BaseUrl + "/auth/edit_profile", postData, this.httpOptions);
  }

  ForgotPassword(mobileno): any {
    let postData = new FormData();
    postData.append("mobileno", mobileno);
    return this.http.post(environment.BaseUrl + "/auth/forgot_password", postData, this.httpOptions);
  }
  addCat(postData): any {
    this.setHeader();
    return this.http.post(environment.BaseUrl + "/Category", postData, this.httpOptions);
  }
  delCat(postData): any {
    this.setHeader();
    return this.http.post(environment.BaseUrl + "/category/cat", postData, this.httpOptions);
    // return this.http.post(environment.BaseUrl + "/category/remove_category", postData, this.httpOptions);
  }
  getCat(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/Category", this.httpOptions);
  }
  getArrive(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/Product/is_arrive", this.httpOptions);
  }
  addProduct(postData): any {
    this.setHeader();
    return this.http.post(environment.BaseUrl + "/Product/add_product", postData, this.httpOptions);
  }
  
  getProcudt(catID): any {
    this.setHeader();
    let postData = new FormData();
    postData.append("CategoryID", catID);
    return this.http.post(environment.BaseUrl + "/Product/product_list",postData, this.httpOptions);
  }
  getWishProduct(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/whishlist", this.httpOptions);
  }
  getFavProduct(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/Like", this.httpOptions);
  }
  productLike(ProductId, status): any {
    this.setHeader();
    let postData = new FormData();
    postData.append("ProductID", ProductId);
    postData.append("IsLike", status);
    return this.http.post(environment.BaseUrl + "/Like", postData, this.httpOptions);
  }
  productFav(ProductId, status): any {
    this.setHeader();
    let postData = new FormData();
    postData.append("ProductID", ProductId);
    postData.append("isFav", status);
    return this.http.post(environment.BaseUrl + "/whishlist", postData, this.httpOptions);
  }
  removeProduct(prodId): any {
    this.setHeader();
    let postData = new FormData();
    postData.append("ProductID", prodId);
    return this.http.post(environment.BaseUrl + "/Product/remove_product", postData, this.httpOptions);
  }
  addCustomer(postData): any {
    this.setHeader();
    return this.http.post(environment.BaseUrl + "/customer/add_customer", postData, this.httpOptions);
  }
  removeCustomer(custId): any {
    this.setHeader();
    let postData = new FormData();
    postData.append("CustomerID", custId);
    return this.http.post(environment.BaseUrl + "/customer/remove_customer", postData, this.httpOptions);
  }
  addMeasurement(postData): any {
    this.setHeader();
    return this.http.post(environment.BaseUrl + "/customer/measurement", postData, this.httpOptions);
  }
  getCustomer(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/customer/customer_list", this.httpOptions);
  }
  getMeasurement(postData): any {
    this.setHeader();
  ;
    return this.http.post(environment.BaseUrl + "/customer/measurement_list", postData, this.httpOptions);
  }
  getNotification(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/notification",  this.httpOptions);
  }
  getOrderCustomer(): any {
    this.setHeader();
    return this.http.get(environment.BaseUrl + "/order/customer_list",  this.httpOptions);
  }
  getOrder(custId,type): any {
    this.setHeader();
    let postData = new FormData();
    postData.append("CustomerID", custId);
    postData.append("type", type);
    console.log('Customer ID ',custId);
    console.log('Type ',type);
    return this.http.post(environment.BaseUrl + "/order/order_list",postData,  this.httpOptions);
  }
  removeOrder(orderId): any {
    this.setHeader();
    let postData = new FormData();
    postData.append("OderHdrID", orderId);
    return this.http.post(environment.BaseUrl + "/order/remove_order", postData, this.httpOptions);
  }
  updateOrder(OderHdrID,Status): any {
    this.setHeader();
    let postData = new FormData();
    postData.append("OderHdrID", OderHdrID);
    postData.append("Status", Status);
    console.log('OderHdrID ',OderHdrID);
    console.log('Status ',Status);
    return this.http.post(environment.BaseUrl + "/order/status",postData,  this.httpOptions);
  }
  addOrder(postData): any {
    this.setHeader();
    return this.http.post(environment.BaseUrl + "/order", postData, this.httpOptions);
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
  getCustomerID() {
    if (window.localStorage['customerID']) {
      return localStorage.getItem('customerID');
    }
    return;
  }
  
  setCustomerID(customer) {
    if (customer != null) {
      return localStorage.setItem('customerID', customer);
    } else {
      localStorage.removeItem('customerID');
      return customer;
    }
  }
  getOrderData() {
    if (window.localStorage['order']) {
      return JSON.parse(localStorage.getItem('order'));
    }
    return;
  }
  
  setOrderData(order) {
    if (order != null) {
      return localStorage.setItem('order', JSON.stringify(order));
    } else {
      localStorage.removeItem('order');
      return order;
    }
  }
  getCustomerData() {
    if (window.localStorage['customer']) {
      return JSON.parse(localStorage.getItem('customer'));
    }
    return;
  }
  getStateList() {
    if (window.localStorage['stateList']) {
      return JSON.parse(localStorage.getItem('stateList'));
    }
    return ;
  }
  setCustomerData(customer) {
    if (customer != null) {
      return localStorage.setItem('customer', JSON.stringify(customer));
    } else {
      localStorage.removeItem('customer');
      return customer;
    }
  
  }
  
  
  getProductData() {
    if (window.localStorage['product']) {
      return JSON.parse(localStorage.getItem('product'));
    }
    return;
  }
  
  setProductData(product) {
    if (product != null) {
      return localStorage.setItem('product', JSON.stringify(product));
    } else {
      localStorage.removeItem('product');
      return product;
    }
  }
  getCategoryData() {
    if (window.localStorage['Category']) {
      return JSON.parse(localStorage.getItem('Category'));
    }
    return;
  }
  
  setCategoryData(Category) {
    if (Category != null) {
      return localStorage.setItem('Category', JSON.stringify(Category));
    } else {
      localStorage.removeItem('Category');
      return Category;
    }
  }



  ChangePassword(postData): any {
    this.setHeader();
    return this.http.post(environment.BaseUrl + "/auth/change_password", postData, this.httpOptions);
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
