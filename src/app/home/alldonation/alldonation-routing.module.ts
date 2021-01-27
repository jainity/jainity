import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlldonationPage } from './alldonation.page';

const routes: Routes = [
  {
    path: '',
    component: AlldonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlldonationPageRoutingModule {}
