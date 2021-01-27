import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemewisedonationPage } from './schemewisedonation.page';

const routes: Routes = [
  {
    path: '',
    component: SchemewisedonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemewisedonationPageRoutingModule {}
