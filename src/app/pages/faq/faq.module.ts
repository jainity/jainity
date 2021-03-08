import { ExpandlistComponent } from './../../widgets/expandlist/expandlist.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FaqPage } from './faq.page';



const routes: Routes = [
  {
    path: '',
    component: FaqPage
  }
];



@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaqPage,ExpandlistComponent]
})
export class FaqPageModule {}
