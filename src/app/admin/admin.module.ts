import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion/gestion.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [GestionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule
  ]
})
export class AdminModule { }
