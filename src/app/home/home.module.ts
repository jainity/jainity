import { SharedModule } from './../shared/shared.module';
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
        redirectTo: "tabs/(schemegroup:schemegroup)",
        pathMatch: "full"
      },
      {
        path: "schemegroup",
        children: [
          {
            path: "",
            //loadChildren: "../home/schemegroup/schemegroup.module#SchemegroupPageModule"
            loadChildren: () => import('../home/schemegroup/schemegroup.module').then( m => m.SchemegroupPageModule)
          }
        ]
      },
      {
        path: "institute",
        children: [
          {
            path: "",
            //loadChildren:"../home/institute/institute.module#InstitutePageModule"
            loadChildren: () => import('../home/institute/institute.module').then( m => m.InstitutePageModule)

          }
        ]
      }, 
      {
        path: "mydonation",
        children: [
          {
            path: "",
            loadChildren: () => import('../home/mydonation/mydonation.module').then( m => m.MydonationPageModule)

          }
        ]
      }, 
      {
        path: "alldonation",
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
    redirectTo: "tabs/schemegroup",
    pathMatch: ""
  }
];


@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})

export class HomePageModule {}
