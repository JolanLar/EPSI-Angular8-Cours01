import { Component } from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {SessionService} from './core/services/session.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  get isSignedIn(): boolean {
    return AuthService.isSignedIn;
  }

  get isAdmin(): boolean {
    return AuthService.isAdmin;
  }

  signout(): void {
    AuthService.user = null;
    this.sessionService.clear();
    this.router.navigate(['/auth/signin']);
    this.snackBar.open('Vous avez été déconnecté', 'OK!', {
      duration: 3000,
    });
  }

}
