import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PrivacypolicyPage } from './privacypolicy.page';


const routes: Routes = [
  {
    path: '',
    component: PrivacypolicyPage
  }
];



@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrivacypolicyPage]
})
export class PrivacypolicyPageModule {}
