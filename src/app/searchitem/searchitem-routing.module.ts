import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchitemPage } from './searchitem.page';

const routes: Routes = [
  {
    path: '',
    component: SearchitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchitemPageRoutingModule {}
