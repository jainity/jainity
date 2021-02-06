import { SharedModule } from './../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InstiwisedonationPage } from './instiwisedonation.page';

const routes: Routes = [
  {
    path: '',
    component: InstiwisedonationPage
  }
];
@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InstiwisedonationPage]
})
export class InstiwisedonationPageModule {}
