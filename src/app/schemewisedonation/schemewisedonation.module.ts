import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemewisedonationPageRoutingModule } from './schemewisedonation-routing.module';

import { SchemewisedonationPage } from './schemewisedonation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchemewisedonationPageRoutingModule
  ],
  declarations: [SchemewisedonationPage]
})
export class SchemewisedonationPageModule {}
