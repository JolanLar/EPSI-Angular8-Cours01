import { Component, OnInit } from '@angular/core';
import {MyNameService} from "../services/my-name.service";

@Component({
  selector: 'app-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.scss']
})
export class MyNameComponent implements OnInit {

  constructor(
    private myNameService: MyNameService
  ) {}

  ngOnInit() {
  }

  get myName(): string {
    return this.myNameService.myName;
  }

}
