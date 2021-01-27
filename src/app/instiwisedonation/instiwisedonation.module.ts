import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstiwisedonationPageRoutingModule } from './instiwisedonation-routing.module';

import { InstiwisedonationPage } from './instiwisedonation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstiwisedonationPageRoutingModule
  ],
  declarations: [InstiwisedonationPage]
})
export class InstiwisedonationPageModule {}
