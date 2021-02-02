import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { SchemegroupPage } from './schemegroup.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SchemegroupPage
  }
];


@NgModule({
  imports: [
  SharedModule,FormsModule,
  RouterModule.forChild(routes),
  ],
  declarations: [SchemegroupPage]
})
export class SchemegroupPageModule {}
