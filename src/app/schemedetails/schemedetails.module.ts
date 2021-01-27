import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemedetailsPageRoutingModule } from './schemedetails-routing.module';

import { SchemedetailsPage } from './schemedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchemedetailsPageRoutingModule
  ],
  declarations: [SchemedetailsPage]
})
export class SchemedetailsPageModule {}
