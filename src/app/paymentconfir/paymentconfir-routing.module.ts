import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentconfirPage } from './paymentconfir.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentconfirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentconfirPageRoutingModule {}
