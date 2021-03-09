(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div id=\"header\">\n        <div class=\"header-block\">\n            <div class=\"container\">\n                <div class=\"header-box\">\n                    <ion-grid class=\"p-0\">\n                        <ion-row>\n                            <ion-col class=\"menubars p-0\">\n                                <ion-icon style=\"cursor: pointer;\" (click)=\"onLogoutClick()\" name=\"power-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col class=\"logo_box p-0\">\n                                <ion-img src=\"assets/img/logo-w.png\"></ion-img>\n                            </ion-col>\n                            <ion-col class=\"search_block p-0\">\n                                <div class=\"search_box\">\n                                    <ion-input [(ngModel)]=\"keyword\" placeholder=\"Search\" (keyup.enter)=\"onEnter($event)\"></ion-input>\n                                    <ion-img *ngIf=\"keyword.trim().length>0\" class=\"close_btn\" src=\"assets/img/close.png\" (click)=\"clearSearch($event)\"></ion-img>\n                                    <ion-img class=\"search_btn\" src=\"assets/img/search-w.png\" (click)=\"getItems($event)\"></ion-img>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <section id=\"section\">\n        <div id=\"tabbing\">\n            <div class=\"container\">\n                <div class=\"tabbing-box\">\n                    <ion-tabs tabbarPlacement=\"top\">\n                        <ion-tab-bar slot=\"top\">\n                            <ion-tab-button class=\"tab-nav-box\" tab=\"schemegroup\">\n                                <ion-label color=\"tertiary\">SCHEME GROUP</ion-label>\n                            </ion-tab-button>\n\n                            <ion-tab-button class=\"tab-nav-box\" tab=\"institute\">\n                                <ion-label color=\"tertiary\">INSTITUTE</ion-label>\n                            </ion-tab-button>\n\n                            <ion-tab-button class=\"tab-nav-box\" tab=\"mydonation\">\n                                <ion-label color=\"tertiary\">MY DONATION</ion-label>\n                            </ion-tab-button>\n\n                            <ion-tab-button class=\"tab-nav-box\" tab=\"alldonation\">\n                                <ion-label color=\"tertiary\">ALL DONATION</ion-label>\n                            </ion-tab-button>\n                        </ion-tab-bar>\n                    </ion-tabs>\n                </div>\n            </div>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");






const routes = [
    {
        path: "tabs",
        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
        children: [
            {
                path: "",
                redirectTo: "tabs/(schemegroup:schemegroup)",
                pathMatch: "full"
            },
            {
                path: "schemegroup",
                children: [
                    {
                        path: "",
                        //loadChildren: "../home/schemegroup/schemegroup.module#SchemegroupPageModule"
                        loadChildren: () => __webpack_require__.e(/*! import() | home-schemegroup-schemegroup-module */ "home-schemegroup-schemegroup-module").then(__webpack_require__.bind(null, /*! ../home/schemegroup/schemegroup.module */ "./src/app/home/schemegroup/schemegroup.module.ts")).then(m => m.SchemegroupPageModule)
                    }
                ]
            },
            {
                path: "institute",
                children: [
                    {
                        path: "",
                        //loadChildren:"../home/institute/institute.module#InstitutePageModule"
                        loadChildren: () => __webpack_require__.e(/*! import() | home-institute-institute-module */ "home-institute-institute-module").then(__webpack_require__.bind(null, /*! ../home/institute/institute.module */ "./src/app/home/institute/institute.module.ts")).then(m => m.InstitutePageModule)
                    }
                ]
            },
            {
                path: "mydonation",
                children: [
                    {
                        path: "",
                        loadChildren: () => __webpack_require__.e(/*! import() | home-mydonation-mydonation-module */ "home-mydonation-mydonation-module").then(__webpack_require__.bind(null, /*! ../home/mydonation/mydonation.module */ "./src/app/home/mydonation/mydonation.module.ts")).then(m => m.MydonationPageModule)
                    }
                ]
            },
            {
                path: "alldonation",
                children: [
                    {
                        path: "",
                        // loadChildren:"../home/alldonation/alldonation.module#AlldonationPageModule"
                        loadChildren: () => __webpack_require__.e(/*! import() | home-alldonation-alldonation-module */ "home-alldonation-alldonation-module").then(__webpack_require__.bind(null, /*! ../home/alldonation/alldonation.module */ "./src/app/home/alldonation/alldonation.module.ts")).then(m => m.AlldonationPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: "",
        redirectTo: "tabs/schemegroup",
        pathMatch: ""
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _shared_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/tools */ "./src/app/shared/tools.ts");







let HomePage = class HomePage {
    constructor(alertController, apiService, router, route, formBuilder, apiServices, tools, toastController) {
        this.alertController = alertController;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.apiServices = apiServices;
        this.tools = tools;
        this.toastController = toastController;
        this.keyword = "";
    }
    onEnter(event) {
    }
    clearSearch(event) {
    }
    getItems(event) {
    }
    onLogoutClick() {
        this.presentLogout('Are you sure you want to logout?', 'Logout', 'Cancel');
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
                            //this.callLogout(true);
                            localStorage.clear();
                            this.router.navigateByUrl('/login', { replaceUrl: true });
                        }
                    }
                ], backdropDismiss: false
            });
            return yield alert.present();
        });
    }
    callLogout(isShow) {
        if (this.tools.isNetwork()) {
            if (isShow)
                this.tools.openLoader();
            this.apiService.logout().subscribe(response => {
                this.tools.closeLoader();
                let res = response;
                console.log('response ', res);
                if (res.status) {
                    localStorage.setItem('userdata', '');
                    localStorage.setItem('login_token', '');
                    localStorage.clear();
                    this.router.navigateByUrl('/login', { replaceUrl: true });
                }
                else {
                    this.tools.presentAlert('', res.message, 'Ok');
                }
            }, (error) => {
                this.tools.closeLoader();
                console.log('Error ', error);
            });
        }
        else {
            this.tools.closeLoader();
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _shared_tools__WEBPACK_IMPORTED_MODULE_6__["Tools"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map