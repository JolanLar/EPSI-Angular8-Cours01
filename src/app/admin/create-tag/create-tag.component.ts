import { Component, OnInit } from '@angular/core';
import {TagInterface as Tag} from '../../core/interfaces/tag.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.scss']
})
export class CreateTagComponent implements OnInit {

  name: string;

  constructor(
    public dialogRef: MatDialogRef<CreateTagComponent>,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
