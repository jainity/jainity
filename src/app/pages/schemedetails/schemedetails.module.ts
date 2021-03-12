import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SchemedetailsPage } from './schemedetails.page';



const routes: Routes = [
  {
    path: '',
    component: SchemedetailsPage
  }
];



@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchemedetailsPage]
})
export class SchemedetailsPageModule {}
