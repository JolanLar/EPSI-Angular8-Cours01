import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TagService} from '../../core/services/tag.service';
import {User} from '../../core/entities/user';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  $tags: Observable<any[]>;

  constructor(
    private tagService: TagService,
  ) {
    this.$tags = tagService.getAll();
  }

  ngOnInit() {
  }

  get user(): User {
    return AuthService.user;
  }

}
