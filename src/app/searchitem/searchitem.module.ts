import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchitemPageRoutingModule } from './searchitem-routing.module';

import { SearchitemPage } from './searchitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchitemPageRoutingModule
  ],
  declarations: [SearchitemPage]
})
export class SearchitemPageModule {}
