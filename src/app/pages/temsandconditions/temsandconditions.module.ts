import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TemsandconditionsPage } from './temsandconditions.page';

const routes: Routes = [
  {
    path: '',
    component: TemsandconditionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TemsandconditionsPage]
})
export class TemsandconditionsPageModule {}
