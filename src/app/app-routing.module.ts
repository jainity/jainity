import { AuthGuard } from './shared/authguard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  //here to redirect page from splash screen
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // {
  //   path: 'Dashboard', canActivate: [AuthGuard],
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
 
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'otpverification',
    loadChildren: () => import('./otpverification/otpverification.module').then( m => m.OtpverificationPageModule)
  },
  {
    path: 'schemedetails', canActivate: [AuthGuard],
    loadChildren: () => import('./schemedetails/schemedetails.module').then( m => m.SchemedetailsPageModule)
  },

  {
    path: 'searchitem', canActivate: [AuthGuard],
    loadChildren: () => import('./searchitem/searchitem.module').then( m => m.SearchitemPageModule)
  },
  {
    path: 'instiwisedonation', canActivate: [AuthGuard],
    loadChildren: () => import('./instiwisedonation/instiwisedonation.module').then( m => m.InstiwisedonationPageModule)
  },
  {
    path: 'schemewisedonation', canActivate: [AuthGuard],
    loadChildren: () => import('./schemewisedonation/schemewisedonation.module').then( m => m.SchemewisedonationPageModule)
  },
  {
    path: 'reciept', canActivate: [AuthGuard],
    loadChildren: () => import('./reciept/reciept.module').then( m => m.RecieptPageModule)
  },
  {
    path: 'paymentconfir', canActivate: [AuthGuard],
    loadChildren: () => import('./paymentconfir/paymentconfir.module').then( m => m.PaymentconfirPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

];

@NgModule({
  imports: [
    //RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
