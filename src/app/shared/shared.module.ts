import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthGuard } from './authguard.service';
import { DatePipe } from '@angular/common';
import { Tools } from './tools';



@NgModule({
  // declarations: [TranslateModule],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
    ],
  exports: [CommonModule, IonicModule,  ReactiveFormsModule],
  providers: [AuthGuard, Tools, DatePipe]
})
export class SharedModule { }
