import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionComponent} from './gestion/gestion.component';

const routes: Routes = [
  {
    path: 'gestion', component: GestionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
