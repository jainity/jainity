import { DonordashboardPage } from './donordashboard.page';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DonordashboardPage
  }
];



@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DonordashboardPage]
})
export class DonordashboardPageModule {}
