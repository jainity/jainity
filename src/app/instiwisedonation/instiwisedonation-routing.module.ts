import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstiwisedonationPage } from './instiwisedonation.page';

const routes: Routes = [
  {
    path: '',
    component: InstiwisedonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstiwisedonationPageRoutingModule {}
