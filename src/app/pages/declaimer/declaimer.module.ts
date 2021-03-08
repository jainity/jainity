import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DeclaimerPage } from './declaimer.page';


const routes: Routes = [
  {
    path: '',
    component: DeclaimerPage
  }
];



@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeclaimerPage]
})
export class DeclaimerPageModule {}
