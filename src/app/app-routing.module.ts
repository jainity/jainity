import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  //here to redirect page from splash screen
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
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
    path: 'otpverification/:mno/:dotp',
    loadChildren: () => import('./otpverification/otpverification.module').then( m => m.OtpverificationPageModule)
  },
  {
    path: 'schemedetails',
    loadChildren: () => import('./schemedetails/schemedetails.module').then( m => m.SchemedetailsPageModule)
  },

  {
    path: 'searchitem',
    loadChildren: () => import('./searchitem/searchitem.module').then( m => m.SearchitemPageModule)
  },
  {
    path: 'instiwisedonation',
    loadChildren: () => import('./instiwisedonation/instiwisedonation.module').then( m => m.InstiwisedonationPageModule)
  },
  {
    path: 'schemewisedonation',
    loadChildren: () => import('./schemewisedonation/schemewisedonation.module').then( m => m.SchemewisedonationPageModule)
  },
  {
    path: 'reciept',
    loadChildren: () => import('./reciept/reciept.module').then( m => m.RecieptPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
