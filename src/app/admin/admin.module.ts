import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion/gestion.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CreateTagComponent } from './create-tag/create-tag.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [GestionComponent, CreateTagComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  entryComponents: [CreateTagComponent]
})
export class AdminModule { }
