import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemedetailsPage } from './schemedetails.page';

const routes: Routes = [
  {
    path: '',
    component: SchemedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemedetailsPageRoutingModule {}
