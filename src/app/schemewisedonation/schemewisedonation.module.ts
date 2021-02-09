import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { SchemewisedonationPage } from './schemewisedonation.page';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: SchemewisedonationPage
  }
];
@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
    ],
  declarations: [SchemewisedonationPage]
})
export class SchemewisedonationPageModule {}
