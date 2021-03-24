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
  // {
  //   path: 'register',
  //   loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  // },
  // {
  //   path: 'otpverification',
  //   loadChildren: () => import('./otpverification/otpverification.module').then( m => m.OtpverificationPageModule)
  // },
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
  // {
  //   path: 'paymentconfir', canActivate: [AuthGuard],
  //   loadChildren: () => import('./paymentconfir/paymentconfir.module').then( m => m.PaymentconfirPageModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'declaimer',
    loadChildren: () => import('./pages/declaimer/declaimer.module').then( m => m.DeclaimerPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },

  {
    path: 'termsandcondition',
    loadChildren: () => import('./pages/termsandcondition/termsandcondition.module').then( m => m.TermsandconditionPageModule)
  },

  {
    path: 'privacypolicy',
    loadChildren: () => import('./pages/privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },

  {
    path: 'schemegrouplist',
    loadChildren: () => import('./pages/schemegrouplist/schemegrouplist.module').then( m => m.SchemegrouplistPageModule)
  },

  {
    path: 'institutelist',
    loadChildren: () => import('./pages/institutelist/institutelist.module').then( m => m.InstitutelistPageModule)
  },
  
  {
    path: 'schemedetailslist',
    loadChildren: () => import('./pages/schemedetails/schemedetails.module').then( m => m.SchemedetailsPageModule)
  },
  {
    path: 'donordashboard',canActivate: [AuthGuard],
    loadChildren: () => import('./pages/donordashboard/donordashboard.module').then( m => m.DonordashboardPageModule)
  },
  {
    path: 'donationlist',canActivate: [AuthGuard],
    loadChildren: () => import('./pages/donationlist/donationlist.module').then( m => m.DonationlistPageModule)
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
