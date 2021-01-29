import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {TagService} from '../../core/services/tag.service';
import {User} from '../../core/entities/user';
import {AuthService} from '../../core/services/auth.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {TagInterface as Tag} from '../../core/interfaces/tag.interface';
import { CreateTagComponent } from '../create-tag/create-tag.component';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})

export class GestionComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'iteration', 'delete'];
  $tags: MatTableDataSource<Tag>;

  constructor(
    private tagService: TagService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {
    this.reloadTags();
  }

  ngOnInit() {
  }

  reloadTags() {
    this.tagService.getAll().toPromise().then((tags) => {
      this.$tags = new MatTableDataSource<Tag>(tags);
      this.$tags.paginator = this.paginator;
      this.$tags.filterPredicate = (data: Tag, filter: string) => {
        return data.name.toLowerCase().includes(filter.toLowerCase());
      };
    });
  }

  get user(): User {
    return AuthService.user;
  }

  applyFilter(value: any) {
    console.log(value);
    this.$tags.filter = value;
  }

  delete(id: string, name: string) {
    this.tagService.delete(id).subscribe(
      () => {
        this.snackBar.open('Supprimé : ' + name, 'OK !', {
          duration: 2000
        });
      }, () => {
        this.snackBar.open('Impossible de supprimer le tag : ' + name, 'OK !', {
          duration: 3000
        });
      }, () => {
        this.reloadTags();
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateTagComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.tagService.create(result).subscribe(() => {
          this.snackBar.open('Nouveau tag : ' + result, 'OK !', {
            duration: 2000
          });
          this.reloadTags();
        }, () => {
          this.snackBar.open('Désolé, impossible de créer le tag : ' + result, 'OK !', {
            duration: 2000
          });
          this.reloadTags();
        });
      }
    });
  }
}
