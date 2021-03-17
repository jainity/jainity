import { PaymentconfirPage } from './paymentconfir/paymentconfir.page';
import { OtpverificationPage } from './otpverification/otpverification.page';
import { RegisterPage } from './register/register.page';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login/login.page';
import { Tools } from 'src/app/shared/tools';
import { AuthGuard } from './shared/authguard.service';
import { Network } from '@ionic-native/network/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { EventService } from './services/EventService';

@NgModule({
  declarations: [AppComponent,LoginPage,RegisterPage,OtpverificationPage,PaymentconfirPage],
  entryComponents: [LoginPage,RegisterPage,OtpverificationPage,PaymentconfirPage],
  imports: [BrowserModule,FormsModule,HttpClientModule,IonicModule.forRoot(), AppRoutingModule],
  providers: [Network,
    StatusBar,Tools,
    SplashScreen,AuthGuard,InAppBrowser,EventService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
