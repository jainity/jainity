import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SchemegrouplistPage } from './schemegrouplist.page';


const routes: Routes = [
  {
    path: '',
    component: SchemegrouplistPage
  }
];



@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchemegrouplistPage]
})
export class SchemegrouplistPageModule {}
