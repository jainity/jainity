!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function o(n,o,e){return o&&t(n.prototype,o),e&&t(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{BhQr:function(t,e,i){"use strict";i.r(e),i.d(e,"FaqPageModule",(function(){return I}));var a=i("PCNd"),r=i("3Pt+"),s=i("tyNb"),c=i("mrSG"),p=i("7C2t"),l=i("b0Bx"),g=i("34Y5"),d=i("fXoL"),m=i("jpo3"),b=i("TEn/"),f=i("H+bZ"),h=i("baId"),u=i("ofXK");function _(n,t){1&n&&(d.Lb(0,"span"),d.lc(1,"\u25b2"),d.Kb())}function x(n,t){1&n&&(d.Lb(0,"span"),d.lc(1,"\u25bc"),d.Kb())}var C,P=((C=function(){function t(){n(this,t),this.change=new d.n,this.isMenuOpen=!1}return o(t,[{key:"ngOnInit",value:function(){}},{key:"toggleAccordion",value:function(n){console.log("toggleAccordion ",this.isMenuOpen),console.log("toggleAccordion name ",n),this.isMenuOpen=!this.isMenuOpen}},{key:"routeUpdateStatus",value:function(n){console.log("scheduleStatusUpdate --\x3e call params ",n)}},{key:"broadcastName",value:function(n){this.change.emit(n)}}]),t}()).\u0275fac=function(n){return new(n||C)},C.\u0275cmp=d.Cb({type:C,selectors:[["app-expandlist"]],inputs:{name:"name",description:"description",isShow:"isShow",image:"image"},outputs:{change:"change"},decls:11,vars:5,consts:[["no-padding","",1,"faq_boxs"],["no-padding","",1,"headings",3,"click"],["no-padding","","size","12"],[1,"title"],[4,"ngIf"],["no-padding","",1,"faq_content",3,"ngClass"],["no-padding",""],[1,"content","xdgdfgdfgfd"]],template:function(n,t){1&n&&(d.Lb(0,"ion-grid",0),d.Lb(1,"ion-row",1),d.Tb("click",(function(){return t.toggleAccordion(t.name)})),d.Lb(2,"ion-col",2),d.Lb(3,"ion-label",3),d.lc(4),d.kc(5,_,2,0,"span",4),d.kc(6,x,2,0,"span",4),d.Kb(),d.Kb(),d.Kb(),d.Lb(7,"ion-row",5),d.Lb(8,"ion-col",6),d.Lb(9,"ion-label",7),d.lc(10),d.Kb(),d.Kb(),d.Kb(),d.Kb()),2&n&&(d.xb(4),d.nc(" ",t.name," "),d.xb(1),d.ac("ngIf",t.isMenuOpen),d.xb(1),d.ac("ngIf",!t.isMenuOpen),d.xb(1),d.ac("ngClass",t.isMenuOpen?"active":"inactive"),d.xb(3),d.mc(t.description))},directives:[b.h,b.u,b.f,b.n,u.l,u.j],styles:['[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{cursor:pointer;line-height:1.2em;font-size:15px;position:relative;padding:5px 5px 5px 10px;font-family:Lato-Bold;color:#ef7635;margin:0}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;right:1em;top:1.2em;font-size:.95em}[_nghost-%COMP%]   .title.indicator[_ngcontent-%COMP%]:after{top:10px;left:-10px;height:12px;width:12px;margin:0;background-color:green;border-radius:50%;display:block;content:"";position:absolute}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;font-size:14px!important;padding:5px 5px 5px 9px;font-family:Lato-Medium;background:transparent;color:#000;border:none}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;bottom:20px;right:20px}[_nghost-%COMP%]   .active[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .inactive[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   ion-card-content[_ngcontent-%COMP%]{background:transparent!important;border:1px solid #fff!important}']}),C);function O(n,t){if(1&n){var o=d.Mb();d.Lb(0,"ion-label",6),d.Tb("click",(function(){return d.fc(o),d.Vb().LoginClick()})),d.lc(1,"Login"),d.Kb()}}function M(n,t){if(1&n){var o=d.Mb();d.Lb(0,"ion-label",6),d.Tb("click",(function(){return d.fc(o),d.Vb().LogoutClick()})),d.lc(1,"Logout"),d.Kb()}}function w(n,t){if(1&n&&d.Jb(0,"app-expandlist",32),2&n){var o=t.$implicit;d.bc("isShow",o.isShow),d.bc("name",o.name),d.bc("description",o.description)}}function v(n,t){if(1&n&&d.Jb(0,"app-expandlist",32),2&n){var o=t.$implicit;d.bc("isShow",o.isShow),d.bc("name",o.name),d.bc("description",o.description)}}var y,L,k=[{path:"",component:(y=function(){function t(o,e,i,a,r,s){var c=this;n(this,t),this.eventServic=o,this.route=e,this.alertController=i,this.apiService=a,this.tools=r,this.modalCtrl=s,this.isLogin=!1,this.DonorfaqList=[],this.InstitutefaqList=[],this.tools.closeLoader(),this.isLogin=null!=this.apiService.getUserData(),this.eventServic.formOtp$.subscribe((function(){c.isLogin=null!=c.apiService.getUserData()})),this.DonorfaqList.push({name:"How do I donate on Jainity?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"true"}),this.DonorfaqList.push({name:"Do I need to enter my PAN while donating?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Can I donate via cheque or cash?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"When will I get a receipt for my donation?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"How to download consolidated donations receipts?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"How do I know my transaction is secure?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Which payment methods are allowed?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"What is a verification report?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Will I get a report to know more about the program that I have donated to?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"How do you verify that my donations are being used the right way?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"I have donated to the wrong project. What should I do?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Can I establish contact with the beneficiary?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Do the donors get 80G certificate on the donations they make?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"How do I know if my donation has reached the program that I am supporting?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Can I support more than one cause?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"The donation I made is not reflecting on your platform, but the amount has already been deducted from my bank account. What is wrong?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"don\u2019t seem to remember my password, how do I log in?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Can I receive a refund for my donation?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"How do I deactivate my account on Janity?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Can I make an anonymous donation?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Will I get any tax benefits on the donation?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"I can\u2019t find institute(s) or cause(s) that I want to donate. What can I do?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Can I recommend institute(s) or cause(s)?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"How can I contribute towards Jainity\u2019s mission?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Where can I report issues?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"How does Jainty verify institutes?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.DonorfaqList.push({name:"Can I make donation from a non-Indian account in INR or in foreign currency?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"What are the eligibility criteria for an institute to be listed on Jainity?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"What is the on-boarding process on Jainity?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"Once published, can I alter my Institute profile?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"What is the process for an NGO to start raising funds using other social media?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"How do I issue receipts and 80G certificates to our donors?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"Can I submit my application materials through email?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"How can I view or update my bank information?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"When will my organization receive the donated amount?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"How can I verify donor identity?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"Can I authorise each transaction in the execution process?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"How can I digitally sign a receipt?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"}),this.InstitutefaqList.push({name:"Can we receive donations from abroad?",description:"There are many variations of passages of Lorem Ipsum available,",isShow:"false"})}return o(t,[{key:"LoginClick",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalCtrl.create({component:g.a,cssClass:"login-modal"});case 2:return(t=n.sent).onDidDismiss().then((function(n){console.log(n.data),"register"==n.data&&o.openRegister(),"OTPPage"==n.data&&o.openOtp()})),n.next=6,t.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"openRegister",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalCtrl.create({component:l.a,cssClass:"register-modal"});case 2:return(t=n.sent).onDidDismiss().then((function(n){console.log(n.data),"login"==n.data&&o.LoginClick(),"OTPPage"==n.data&&o.openOtp()})),n.next=6,t.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"openOtp",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalCtrl.create({component:p.a,cssClass:"login-modal"});case 2:return(t=n.sent).onDidDismiss().then((function(n){"login"==n.data&&o.LoginClick(),"register"==n.data&&o.openRegister()})),n.next=6,t.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"LogoutClick",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({message:"Are you sure you want to logout?",buttons:[{text:"Cancel",role:"cancel",handler:function(){}},{text:"Logout",handler:function(){o.isLogin=!o.isLogin,localStorage.clear(),o.route.navigateByUrl("/home",{replaceUrl:!0})}}],backdropDismiss:!1});case 2:return t=n.sent,n.next=5,t.present();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"ngOnInit",value:function(){}},{key:"ionViewDidEnter",value:function(){}}]),t}(),y.\u0275fac=function(n){return new(n||y)(d.Ib(m.a),d.Ib(s.f),d.Ib(b.a),d.Ib(f.a),d.Ib(h.a),d.Ib(b.E))},y.\u0275cmp=d.Cb({type:y,selectors:[["app-faq"]],decls:80,vars:4,consts:[[1,"container"],[2,"padding","10px 0px","align-items","center"],["size","3",1,"logo_box",2,"cursor","pointer",3,"click"],["src","assets/img/logo_n.png",1,"menu-logo"],[1,"logo-title"],["size","9",1,"menu"],[2,"cursor","pointer",3,"click"],["style","cursor: pointer;",3,"click",4,"ngIf"],["id","content"],["id","page_banner"],[1,"page_banner_block",2,"background-image","url('assets/img/faq.png')"],[1,"page_banner_box"],["id","faq"],[1,"faq_block"],[1,"faq_box"],[1,"title"],[3,"isShow","name","description",4,"ngFor","ngForOf"],[1,"faq_box",2,"margin-top","30px"],["id","footer"],[1,"footer-box"],["size","4"],[1,"logo_box",2,"cursor","pointer",3,"click"],[1,"content",2,"margin-top","10px"],[1,"link_box"],[2,"cursor","pointer","color","white",3,"click"],[1,"contactusmenu",2,"cursor","pointer","color","white"],[1,"social_icons"],[1,"icons"],["href","https://www.facebook.com/Jainity-101802545134328/?ti=as","target","_blank"],["src","assets/img/fb.png"],["href","https://instagram.com/jainityapp?igshid=1eb8rk5ppbjw2","target","_blank"],["src","../assets/img/instagram.png"],[3,"isShow","name","description"]],template:function(n,t){1&n&&(d.Lb(0,"ion-header"),d.Lb(1,"ion-toolbar"),d.Lb(2,"ion-grid",0),d.Lb(3,"ion-row",1),d.Lb(4,"ion-col",2),d.Tb("click",(function(){return t.tools.goHome()})),d.Jb(5,"ion-img",3),d.Lb(6,"ion-label",4),d.lc(7,"Jainity"),d.Kb(),d.Kb(),d.Lb(8,"ion-col",5),d.Lb(9,"ion-label",6),d.Tb("click",(function(){return t.tools.goHome()})),d.lc(10,"Home"),d.Kb(),d.kc(11,O,2,0,"ion-label",7),d.kc(12,M,2,0,"ion-label",7),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Lb(13,"ion-content",8),d.Lb(14,"ion-grid",9),d.Lb(15,"ion-row",10),d.Lb(16,"ion-col",0),d.Lb(17,"div",11),d.Lb(18,"ion-label"),d.lc(19,"FAQ"),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Lb(20,"ion-grid",12),d.Lb(21,"ion-row",13),d.Lb(22,"ion-col"),d.Lb(23,"ion-grid",0),d.Lb(24,"ion-row"),d.Lb(25,"ion-col"),d.Lb(26,"div",14),d.Lb(27,"ion-label",15),d.lc(28,"Donor Queries"),d.Kb(),d.kc(29,w,1,3,"app-expandlist",16),d.Kb(),d.Lb(30,"div",17),d.Lb(31,"ion-label",15),d.lc(32,"Institute Queries"),d.Kb(),d.kc(33,v,1,3,"app-expandlist",16),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Lb(34,"ion-grid",18),d.Lb(35,"ion-row"),d.Lb(36,"ion-col"),d.Lb(37,"ion-grid",0),d.Lb(38,"ion-row",19),d.Lb(39,"ion-col",20),d.Lb(40,"div",21),d.Tb("click",(function(){return t.tools.goHome()})),d.Jb(41,"ion-img",3),d.Lb(42,"ion-label",4),d.lc(43,"Jainity"),d.Kb(),d.Kb(),d.Lb(44,"div"),d.Lb(45,"ion-label",22),d.lc(46,"We are a team of inspired technology visionaries and business leaders with professional experience in multinational corporates in India and abroad who were born and are raised in Jain families."),d.Kb(),d.Kb(),d.Lb(47,"div"),d.Lb(48,"ion-label",22),d.lc(49,"We are applying our qualifications, years of experience and Jain values for transforming Jain charities for the digital future."),d.Kb(),d.Kb(),d.Kb(),d.Lb(50,"ion-col",20),d.Lb(51,"ion-label",15),d.lc(52,"Quick Links"),d.Kb(),d.Lb(53,"div",23),d.Lb(54,"ion-label",24),d.Tb("click",(function(){return t.tools.goHome()})),d.lc(55,"Home"),d.Kb(),d.Lb(56,"ion-label",25),d.lc(57,"Contact"),d.Kb(),d.Lb(58,"ion-label",24),d.Tb("click",(function(){return t.tools.goFAQ()})),d.Lb(59,"a"),d.lc(60,"FAQ"),d.Kb(),d.Kb(),d.Lb(61,"ion-label",24),d.Tb("click",(function(){return t.tools.goDisclaimer()})),d.Lb(62,"a"),d.lc(63,"Disclaimer"),d.Kb(),d.Kb(),d.Lb(64,"ion-label",24),d.Tb("click",(function(){return t.tools.goTAC()})),d.Lb(65,"a"),d.lc(66,"T & C"),d.Kb(),d.Kb(),d.Lb(67,"ion-label",24),d.Tb("click",(function(){return t.tools.goPP()})),d.Lb(68,"a"),d.lc(69,"Policy"),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Lb(70,"ion-col",20),d.Lb(71,"ion-label",15),d.lc(72,"Social"),d.Kb(),d.Lb(73,"div",26),d.Lb(74,"ion-label",27),d.Lb(75,"a",28),d.Jb(76,"ion-img",29),d.Kb(),d.Kb(),d.Lb(77,"ion-label",27),d.Lb(78,"a",30),d.Jb(79,"ion-img",31),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb()),2&n&&(d.xb(11),d.ac("ngIf",!t.isLogin),d.xb(1),d.ac("ngIf",t.isLogin),d.xb(17),d.ac("ngForOf",t.DonorfaqList),d.xb(4),d.ac("ngForOf",t.InstitutefaqList))},directives:[b.i,b.z,b.h,b.u,b.f,b.k,b.n,u.l,b.g,u.k,P],styles:['@charset "UTF-8";ion-toolbar[_ngcontent-%COMP%]{background:#fff!important;--background:#fff!important}ion-header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:block}ion-col[_ngcontent-%COMP%], ion-grid[_ngcontent-%COMP%]{padding:0;margin:0}.container[_ngcontent-%COMP%]{max-width:1200px;width:100%;padding:0 15px;margin:0 auto;position:relative}.menu-logo[_ngcontent-%COMP%]{width:30px!important;display:inline-block;vertical-align:middle;margin:0 10px 0 0}.logo-title[_ngcontent-%COMP%]{font-size:18px!important;font-family:Poppins;text-transform:uppercase;letter-spacing:7px}.menu[_ngcontent-%COMP%]{text-align:right}.menu[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding:0 10px;margin:0 10px;display:inline-block;color:#000;font-family:Poppins;font-size:16px!important}.menu[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:first-child{padding-left:0;margin-left:0}.menu[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:last-child{padding-right:0;margin-right:0}.banner_list_box[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-width:80px;margin:0 auto}.page_banner[_ngcontent-%COMP%]{min-height:calc(100vh - 69.65px)!important;width:100%;background-size:cover;background-position:50%;background-repeat:no-repeat;position:relative}.page_img_banner[_ngcontent-%COMP%]{height:calc(100vh - 69.65px);overflow:hidden;position:relative;width:100%}.page_img_banner[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:auto}.slider-box[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{position:absolute!important;width:100%;top:0;z-index:1!important;height:100%}.slider-box[_ngcontent-%COMP%]{height:calc(100vh - 69.65px);overflow:hidden;position:relative;width:100%}.page_banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:50px 15px 180px;display:table;min-height:calc(100vh - 69.65px)!important;position:relative;z-index:2}.banner_content_box[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle}.banner_content_box[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:#ed3237;margin-top:15px;width:180px;height:50px;border-radius:50px;overflow:hidden;font-family:Poppins-Bold;font-size:18px}.banner_list_box[_ngcontent-%COMP%]{position:absolute;width:calc(100% - 30px);left:15px;bottom:30px;display:flex;justify-content:space-between}.banner_list_box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:Poppins;font-size:16px!important;color:#000;text-transform:capitalize;margin-top:8px;display:block}.banner_list_box[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{flex:0 0 90px;text-align:center;width:100%;max-width:90px}.tag-line[_ngcontent-%COMP%]{font-size:44px!important;font-family:Poppins-Bold;text-transform:uppercase;line-height:45px;margin:0 0 13px}.subtag-line[_ngcontent-%COMP%], .tag-line[_ngcontent-%COMP%]{color:#fff;padding:0;letter-spacing:.8px;display:block;text-shadow:0 0 3px #000}.subtag-line[_ngcontent-%COMP%]{font-size:20px!important;margin:0;line-height:30px}.disclaimer[_ngcontent-%COMP%], .subtag-line[_ngcontent-%COMP%]{font-family:Poppins-SemiBold}.disclaimer[_ngcontent-%COMP%]{font-size:8px!important;margin-left:25px;margin-right:25px;padding:15px}.about-box[_ngcontent-%COMP%]{padding:60px 0;margin:0 -15px}.about-box[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0 15px!important}.content-title[_ngcontent-%COMP%]{color:#ed3237;font-size:30px!important;display:block;font-family:Poppins-Bold;text-transform:uppercase;padding-bottom:15px}.about_img[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;border-radius:20px;overflow:hidden}.about_img[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:100%;transform:translate(-50%,-50%)}.content[_ngcontent-%COMP%]{color:#3a3636;font-size:15px!important;font-family:Poppins;line-height:22px!important;display:block}#way[_ngcontent-%COMP%]   .way-block[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:50%;padding:60px 0}#way[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:60px;margin:0 auto;display:block;min-height:58px}#way[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;text-transform:uppercase;font-size:18px!important;margin:20px 0;font-weight:700;display:block;text-align:center}#way[_ngcontent-%COMP%]   .way-box[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;align-items:flex-start!important}#way[_ngcontent-%COMP%]   .way-box[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0 15px;text-align:center}#way[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{color:#fff}#work[_ngcontent-%COMP%]{background:#ff7400;padding:60px 0}#work[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]{margin:0 -15px;justify-content:space-between;position:relative;z-index:2}#work[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{max-width:300px!important;width:100%;padding:0 15px}#work[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]   ion-col.col-w-50[_ngcontent-%COMP%]{max-width:50%!important;width:100%;padding:0 15px}#work[_ngcontent-%COMP%]   .work_icon[_ngcontent-%COMP%]{max-width:50px;height:70px;display:block}#work[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px!important;color:#fff;font-family:Poppins-Bold;text-transform:uppercase;padding:0;display:block;line-height:20px;margin:0 0 10px}#work[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{color:#fff!important;line-height:18px!important}#work[_ngcontent-%COMP%]   .content.bold[_ngcontent-%COMP%]{min-height:55px;font-weight:600}#work[_ngcontent-%COMP%]   .content_list[_ngcontent-%COMP%]   ion-label.content[_ngcontent-%COMP%]{padding-left:25px;padding-bottom:12px;position:relative;line-height:20px!important;display:block}#work[_ngcontent-%COMP%]   .content_list[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:after{content:" \xbb";display:block;position:absolute;left:0;top:0;font-size:30px;font-weight:700}.section-title[_ngcontent-%COMP%]{color:#fff;font-size:26px!important;margin-bottom:30px;margin-top:-15px}.section-title[_ngcontent-%COMP%], .txt-title[_ngcontent-%COMP%]{display:block;text-align:center;text-transform:uppercase;font-family:Poppins-Bold;position:relative;z-index:2}.txt-title[_ngcontent-%COMP%]{color:#000;font-size:20px!important;margin-bottom:10px;margin-top:20px}#advantage[_ngcontent-%COMP%]{padding:60px 0;background:#f6f6f6}#advantage[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Poppins-Bold;font-size:28px!important;margin-bottom:10px;display:block}#advantage[_ngcontent-%COMP%]   .rows[_ngcontent-%COMP%], #advantage[_ngcontent-%COMP%]   .rows[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin:0 -15px}#advantage[_ngcontent-%COMP%]   .rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0 15px}#advantage[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{max-width:60px;flex:0 0 60px}#advantage[_ngcontent-%COMP%]   .rows[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:17px!important;margin-bottom:4px!important;text-transform:uppercase}#advantage[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]{margin-top:30px}#footer[_ngcontent-%COMP%]{padding:60px 0;background:#008c8c}#footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-family:Poppins-Bold;font-size:22px!important;border-bottom:1px solid #fff;display:inline-block;margin-bottom:28px}.link_box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{flex:0 0 50%;padding-bottom:10px}.link_box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-family:Poppins}.link_box[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap}#footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{color:#fff!important;margin-top:10px}.social_icons[_ngcontent-%COMP%]{display:flex;align-items:center}.social_icons[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{background:#016060;flex:0 0 40px;margin:0 5px;padding:10px;border-radius:50%;height:40px;line-height:50px;display:block}.social_icons[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:first-child{margin-left:0}.social_icons[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:last-child{margin-right:0}.footer-box[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{max-width:190px!important;width:100%!important}.footer-box[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:first-child{max-width:332px!important;width:100%!important}.footer-box[_ngcontent-%COMP%]{justify-content:space-between}.slider_box_banner[_ngcontent-%COMP%]{position:absolute}.slider_box[_ngcontent-%COMP%]{position:relative;padding:20px;display:block!important}.slider_img[_ngcontent-%COMP%]{border-radius:20px}.slider_img[_ngcontent-%COMP%], .slider_img_scheme[_ngcontent-%COMP%]{width:100%;display:block!important;flex:0 0 100%;position:relative;height:280px;overflow:hidden}.slider_img_scheme[_ngcontent-%COMP%]{border-radius:0}.slider_img[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);max-height:400px;max-width:100%;width:100%}.slider_box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:16px!important;font-family:Poppins;display:block;line-height:18px;margin-top:12px}.slider_box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px!important;display:block}#sliders[_ngcontent-%COMP%]{padding:60px 0}#slider[_ngcontent-%COMP%]   .slider_tabs_box[_ngcontent-%COMP%]{margin-bottom:20px}#sliders[_ngcontent-%COMP%]   .sliders_boxs[_ngcontent-%COMP%]{padding:0 30px!important;position:relative}#sliders[_ngcontent-%COMP%]   ion-img.nav[_ngcontent-%COMP%]{position:absolute;top:49%;transform:translateY(-50%);left:0;width:20px;height:37px;cursor:pointer}#sliders[_ngcontent-%COMP%]   ion-img.nav.right_nav[_ngcontent-%COMP%]{left:auto;right:0}.slider_tabs[_ngcontent-%COMP%]{display:flex!important;flex-wrap:nowrap!important;align-items:center!important;justify-content:center!important}.slider_tabs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{height:auto;min-height:auto!important;border:none!important;background:transparent!important;width:auto!important;--min-height:auto!important;--padding-start:0px!important;--padding-end:0px!important;--inner-border-width:0px!important;--background:transparent!important;--background-activated:transparent;--background-focused:transparent;--background-hover:transparent;--background-activated-opacity:0!important;--background-focused-opacity:0!important;--background-hover-opacity:0!important;--margin:0px!important;--padding:0px!important;--min-width:auto!important;--inner-padding-end:0px!important}.slider_tabs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{position:relative;width:100%;display:block;margin:0;padding:0}.slider_tabs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{position:absolute;top:0!important;left:0!important;width:100%;height:100%;margin:0!important;padding:0;opacity:0;z-index:2}.slider_tabs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .check_mark[_ngcontent-%COMP%]{color:#000;font-family:Poppins;font-size:16px;padding:10px 22px;background:transparent;display:block;line-height:16px}.slider_tabs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-radio.radio-checked[_ngcontent-%COMP%] ~ .check_mark[_ngcontent-%COMP%]{background:#f5d525}.button_link[_ngcontent-%COMP%]{color:#000;font-family:Poppins;font-size:18px;padding:0;--padding:0px!important;background:transparent!important;--background:transparent!important;border:none!important;--border:none!important;--box-shadow:0px!important;display:block;width:120px;margin:25px auto 0}#sliders[_ngcontent-%COMP%]   .slider_tabs_box[_ngcontent-%COMP%]{margin-bottom:15px}.setting-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{--ion-background-color:#f12000;--border-radius:20px;--max-height:55%;--max-width:80%;--width:80%;--height:50%;--border-style:dotted;--border-color:#428cff;border-width:5px;top:20%}#faq[_ngcontent-%COMP%]   .faq_box[_ngcontent-%COMP%]   .faq_content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:left!important;padding:0!important}@media (max-width:992px){ion-header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{flex:0 0 110px!important;max-width:110px!important;position:relative;width:auto}ion-header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding:0 5px!important;margin:0 5px!important;font-size:14px!important}ion-header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:first-child{padding-left:0!important;margin-left:0!important}ion-header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:last-child{padding-right:0!important;margin-right:0!important}}']}),y)}],I=((L=function t(){n(this,t)}).\u0275mod=d.Gb({type:L}),L.\u0275inj=d.Fb({factory:function(n){return new(n||L)},imports:[[a.a,r.b,s.h.forChild(k)]]}),L)}}])}();