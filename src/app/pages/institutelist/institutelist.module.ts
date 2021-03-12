import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { InstitutelistPage } from './institutelist.page';



const routes: Routes = [
  {
    path: '',
    component: InstitutelistPage
  }
];



@NgModule({
  imports: [
    SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InstitutelistPage]
})
export class InstitutelistPageModule {}
