import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutePage } from './institute.page';

const routes: Routes = [
  {
    path: '',
    component: InstitutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutePageRoutingModule {}
