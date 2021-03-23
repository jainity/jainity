import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DonationlistPage } from './donationlist.page';

const routes: Routes = [
  {
    path: '',
    component: DonationlistPage
  }
];



@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DonationlistPage]
})
export class DonationlistPageModule {}
