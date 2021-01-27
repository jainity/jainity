import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: "tabs",
    component: HomePage,
    children: [
      {
        path: "",
        redirectTo: "tabs/(SCHEMEGROUP:SCHEMEGROUP)",
        pathMatch: "full"
      },
      {
        path: "SCHEMEGROUP",
        children: [
          {
            path: "",
            //loadChildren: "../home/schemegroup/schemegroup.module#SchemegroupPageModule"
            loadChildren: () => import('../home/schemegroup/schemegroup.module').then( m => m.SchemegroupPageModule)
          }
        ]
      },
      {
        path: "INSTITUTE",
        children: [
          {
            path: "",
            //loadChildren:"../home/institute/institute.module#InstitutePageModule"
            loadChildren: () => import('../home/institute/institute.module').then( m => m.InstitutePageModule)

          }
        ]
      }, 
      {
        path: "MYDONATION",
        children: [
          {
            path: "",
            loadChildren: () => import('../home/mydonation/mydonation.module').then( m => m.MydonationPageModule)

          }
        ]
      }, 
      {
        path: "ALLDONATION",
        children: [
          {
            path: "",
           // loadChildren:"../home/alldonation/alldonation.module#AlldonationPageModule"
            loadChildren: () => import('../home/alldonation/alldonation.module').then( m => m.AlldonationPageModule)

          }
        ]
      }
    ]
  },
  {
    path: "",
    redirectTo: "tabs/SCHEMEGROUP",
    pathMatch: "full"
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})

export class HomePageModule {}
