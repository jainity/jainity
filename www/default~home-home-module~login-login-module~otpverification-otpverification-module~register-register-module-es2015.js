(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~login-login-module~otpverification-otpverification-module~register-register-module"],{

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");







let ApiService = class ApiService {
    constructor(device, http, alertController, router) {
        this.device = device;
        this.http = http;
        this.alertController = alertController;
        this.router = router;
        this.apiKey = '';
        this.bacisAuth = 'Basic ' + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].username + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].password);
        this.setHeader();
    }
    setHeader() {
        console.log('getLoginToken ', this.getLoginToken());
        if (this.getLoginToken() == undefined) {
            console.log('Basic auth ' + this.bacisAuth);
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    // 'Accept': 'application/json,',
                    // 'Content-Type': 'multipart/form-data',
                    // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    // 'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers': "Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': this.bacisAuth,
                    'X-JAINITY-API-KEY': src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apikey,
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    // 'Accept': 'application/json',
                    // 'Content-Type': 'multipart/form-data',
                    // 'Content-Type': 'application/json',
                    // 'Content-Type':'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Headers': "Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': this.bacisAuth,
                    'X-JAINITY-API-KEY': src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apikey,
                    'User-Id': this.getUserId(),
                    'X-JAINITY-LOGIN-TOKEN': this.getLoginToken(),
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
        console.log('User Info--> ', this.getUserData());
        return this.getUserData().id;
    }
    getUserData() {
        console.log('User Data --> ', localStorage['userdata']);
        if (localStorage['userdata']) {
            return JSON.parse(localStorage.getItem('userdata'));
        }
        return;
    }
    setUserData(user) {
        console.log(user);
        if (user != null) {
            return localStorage.setItem('userdata', JSON.stringify(user));
        }
        else {
            localStorage.removeItem('userdata');
            return user;
        }
    }
    stateList() {
        this.setHeader();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/category/state", this.httpOptions);
    }
    SendOTP(username) {
        let postData = new FormData();
        // postData.append('file', imageFile);
        postData.append("Mobile", username);
        postData.append("device_token", this.device.uuid);
        console.log('Params ', postData);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "auth/send_otp", postData, this.httpOptions);
    }
    VerificationOTP(OTP, Mobile) {
        let postData = new FormData();
        // postData.append('file', imageFile);
        postData.append("OTP", OTP);
        postData.append("Mobile", Mobile);
        postData.append("device_token", this.device.uuid);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "auth/verify_otp", postData, this.httpOptions);
    }
    logout() {
        let postData = new FormData();
        postData.append("DeviceID", this.device.uuid);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/auth/logout", postData, this.httpOptions);
    }
    Register(Fname, Lname, Mobileno) {
        let postData = new FormData();
        // postData.append('file', imageFile);
        postData.append("FirstName", Fname);
        postData.append("LastName", Lname);
        postData.append("Mobile", Mobileno);
        postData.append("device_token", this.device.uuid);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "auth/register", postData, this.httpOptions);
    }
    getSchemeGroup() {
        this.setHeader();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/scheme_group", this.httpOptions);
    }
    userData(isShow) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/auth/user_data", this.httpOptions).subscribe(response => {
            let res = response;
            if (res.status) {
                if (isShow) {
                    if (this.dateDifference((res.data.user).planenddate) <= 0) {
                        this.openAlert('Your plan expire, please contact to administrator', true);
                    }
                    else if (this.dateDifference((res.data.user).planenddate) <= 7) {
                        this.openAlert('Your plan has expire after ' + this.dateDifference((res.data.user).planenddate) + ' days please contact to administrator', false);
                    }
                }
                localStorage.setItem('userdata', JSON.stringify(res.data.user));
                // this.tools.openAlert('Plan Expire ',res.data.user);
            }
        }, (error) => {
            let err = error;
            console.log('Error ', err.error);
        });
    }
    dateDifference(end) {
        let startDt = new Date();
        let endDt = new Date(end);
        console.log('Date Difference ', ((endDt.getTime() - startDt.getTime()) / (24 * 3600 * 1000)));
        return Math.ceil(((endDt.getTime() - startDt.getTime()) / (24 * 3600 * 1000)));
    }
    editProfile(postData) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/auth/edit_profile", postData, this.httpOptions);
    }
    ForgotPassword(mobileno) {
        let postData = new FormData();
        postData.append("mobileno", mobileno);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/auth/forgot_password", postData, this.httpOptions);
    }
    addCat(postData) {
        this.setHeader();
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Category", postData, this.httpOptions);
    }
    delCat(postData) {
        this.setHeader();
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/category/cat", postData, this.httpOptions);
        // return this.http.post(environment.BaseUrl + "/category/remove_category", postData, this.httpOptions);
    }
    getCat() {
        this.setHeader();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Category", this.httpOptions);
    }
    getArrive() {
        this.setHeader();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Product/is_arrive", this.httpOptions);
    }
    addProduct(postData) {
        this.setHeader();
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Product/add_product", postData, this.httpOptions);
    }
    getProcudt(catID) {
        this.setHeader();
        let postData = new FormData();
        postData.append("CategoryID", catID);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Product/product_list", postData, this.httpOptions);
    }
    getWishProduct() {
        this.setHeader();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/whishlist", this.httpOptions);
    }
    getFavProduct() {
        this.setHeader();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Like", this.httpOptions);
    }
    productLike(ProductId, status) {
        this.setHeader();
        let postData = new FormData();
        postData.append("ProductID", ProductId);
        postData.append("IsLike", status);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Like", postData, this.httpOptions);
    }
    productFav(ProductId, status) {
        this.setHeader();
        let postData = new FormData();
        postData.append("ProductID", ProductId);
        postData.append("isFav", status);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/whishlist", postData, this.httpOptions);
    }
    removeProduct(prodId) {
        this.setHeader();
        let postData = new FormData();
        postData.append("ProductID", prodId);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Product/remove_product", postData, this.httpOptions);
    }
    addCustomer(postData) {
        this.setHeader();
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/customer/add_customer", postData, this.httpOptions);
    }
    removeCustomer(custId) {
        this.setHeader();
        let postData = new FormData();
        postData.append("CustomerID", custId);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/customer/remove_customer", postData, this.httpOptions);
    }
    addMeasurement(postData) {
        this.setHeader();
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/customer/measurement", postData, this.httpOptions);
    }
    getCustomer() {
        this.setHeader();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/customer/customer_list", this.httpOptions);
    }
    getMeasurement(postData) {
        this.setHeader();
        ;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/customer/measurement_list", postData, this.httpOptions);
    }
    getNotification() {
        this.setHeader();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/notification", this.httpOptions);
    }
    getOrderCustomer() {
        this.setHeader();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/order/customer_list", this.httpOptions);
    }
    getOrder(custId, type) {
        this.setHeader();
        let postData = new FormData();
        postData.append("CustomerID", custId);
        postData.append("type", type);
        console.log('Customer ID ', custId);
        console.log('Type ', type);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/order/order_list", postData, this.httpOptions);
    }
    removeOrder(orderId) {
        this.setHeader();
        let postData = new FormData();
        postData.append("OderHdrID", orderId);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/order/remove_order", postData, this.httpOptions);
    }
    updateOrder(OderHdrID, Status) {
        this.setHeader();
        let postData = new FormData();
        postData.append("OderHdrID", OderHdrID);
        postData.append("Status", Status);
        console.log('OderHdrID ', OderHdrID);
        console.log('Status ', Status);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/order/status", postData, this.httpOptions);
    }
    addOrder(postData) {
        this.setHeader();
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/order", postData, this.httpOptions);
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
        }
        else {
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
        }
        else {
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
        }
        else {
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
        return;
    }
    setCustomerData(customer) {
        if (customer != null) {
            return localStorage.setItem('customer', JSON.stringify(customer));
        }
        else {
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
        }
        else {
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
        }
        else {
            localStorage.removeItem('Category');
            return Category;
        }
    }
    ChangePassword(postData) {
        this.setHeader();
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/auth/change_password", postData, this.httpOptions);
    }
    openAlert(message, isTrue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: message ? message : 'This is an alert message.',
                buttons: [
                    {
                        text: isTrue ? 'Login' : 'Ok',
                        handler: () => {
                            if (isTrue) {
                                localStorage.setItem('userdata', '');
                                localStorage.setItem('login_token', '');
                                localStorage.clear();
                                this.router.navigateByUrl('/login', { replaceUrl: true });
                            }
                        }
                    }
                ],
                backdropDismiss: false
            });
            return yield alert.present();
        });
    }
    getKeyPairValue(param) {
        let formBody = [];
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
};
ApiService.ctorParameters = () => [
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authguard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authguard.service */ "./src/app/shared/authguard.service.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools */ "./src/app/shared/tools.ts");


// import { CommonModule } from '@angular/common';






let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // declarations: [TranslateModule],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        providers: [_authguard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _tools__WEBPACK_IMPORTED_MODULE_6__["Tools"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/tools.ts":
/*!*********************************!*\
  !*** ./src/app/shared/tools.ts ***!
  \*********************************/
/*! exports provided: Tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");






let Tools = class Tools {
    constructor(alertController, apiServices, toastController, network, loadingController, router, navCtrl) {
        this.alertController = alertController;
        this.apiServices = apiServices;
        this.toastController = toastController;
        this.network = network;
        this.loadingController = loadingController;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    backPage() {
        this.navCtrl.back();
    }
    callStateList(isShow) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isNetwork()) {
                if (isShow)
                    this.openLoader();
                this.apiServices.stateList().subscribe(response => {
                    var res = response;
                    this.closeLoader();
                    if (res.status) {
                        localStorage.setItem('stateList', JSON.stringify(res.state_list));
                    }
                    else {
                        localStorage.setItem('stateList', JSON.stringify([]));
                        return [];
                    }
                }, (error) => {
                    this.closeLoader();
                    console.log('Error ', error);
                });
            }
            else {
                this.closeLoader();
                return [];
            }
        });
    }
    getCities(stateList, id) {
        if (stateList.length > 0) {
            if (stateList.filter(x => x.StateID === id).length > 0)
                return stateList.filter(x => x.StateID === id)[0].City;
            else {
                return [];
            }
        }
    }
    isNetwork() {
        this.closeLoader();
        if (this.network.type == 'none') {
            this.presentAlert('No internet', 'You do not have an Internet connection. Please check your connection status', 'Ok');
            return false;
        }
        else {
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
    openNotification(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.notification = yield this.toastController.create({
                message: options.message,
                duration: options.duration ? options.duration : 3000,
                position: options.position ? options.position : 'top',
                cssClass: options.class ? options.class : 'info'
            });
            this.notification.present();
        });
    }
    formateDateyyyymmddhis(date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    formateDay(today) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    formatAMPM1(date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    formatAMPM(date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    openLoader(cssClass = '', msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(' ===> ',msg);
            this.loading = yield this.loadingController.create({
                message: msg ? msg : '',
                keyboardClose: true,
                showBackdrop: true,
                cssClass: cssClass
            });
            yield this.loading.present();
        });
    }
    openAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: message ? message : 'This is an alert message.',
                buttons: ['OK'],
                backdropDismiss: false
            });
            return yield alert.present();
        });
    }
    openAlertToken(status, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Api Status ', status);
            const alert = yield this.alertController.create({
                message: message ? message : 'This is an alert message.',
                buttons: [
                    {
                        text: status == 401 ? 'Login' : 'Ok',
                        handler: () => {
                            if (status == 401) {
                                localStorage.setItem('userdata', '');
                                localStorage.setItem('login_token', '');
                                localStorage.clear();
                                this.router.navigateByUrl('/login', { replaceUrl: true });
                            }
                        }
                    }
                ],
                backdropDismiss: false
            });
            return yield alert.present();
        });
    }
    presentLogout(message, btnYes, btnNo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
                            localStorage.setItem('userdata', '');
                            localStorage.setItem('login_token', '');
                            localStorage.clear();
                            this.router.navigateByUrl('/login', { replaceUrl: true });
                        }
                    }
                ], backdropDismiss: true
            });
            return yield alert.present();
        });
    }
    presentAlertToLogin(title, msg, btnOk) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.closeLoader();
            const alert = yield this.alertController.create({
                header: title,
                message: msg,
                buttons: [
                    {
                        text: btnOk,
                        handler: () => {
                            localStorage.setItem('userdata', '');
                            localStorage.setItem('login_token', '');
                            localStorage.clear();
                            this.router.navigateByUrl('/login', { replaceUrl: true });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlert(title, msg, btnOk, isMove) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: msg,
                buttons: [
                    {
                        text: btnOk,
                        handler: () => {
                            if (isMove)
                                this.router.navigateByUrl('/dashboard', { replaceUrl: true });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentConfirm(message, btnYes, btnNo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            return yield alert.present();
        });
    }
    closeLoader() {
        // setTimeout(() => {
        if (this.loading) {
            this.loading.dismiss();
        }
        // }, 500);
    }
    dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
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
        }
        else {
            imagename = new Date().getTime() + keys + file.name;
        }
        imagename.replace(/_/g, ' ');
        imagename = imagename.replace(/\s+/g, '-');
        imagename = imagename.replace(/%20/g, '_');
        return imagename;
    }
};
Tools.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_1__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
Tools = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], Tools);



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~login-login-module~otpverification-otpverification-module~register-register-module-es2015.js.map