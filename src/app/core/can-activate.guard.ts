import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from './services/auth.service';
import {catchError, map} from 'rxjs/operators';
import {User} from './entities/user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.me().pipe(
      // on regarde si on a un erreur de permission et on retourne le status de la requête
      catchError((error: Response) => {
        let status = 500;
        if (error.status === 401 || error.status === 403) { // unauthorized or forbidden //
          status = error.status;
        }
        this.snackBar.open('Il faut être connecté pour accéder à cette page!', 'OK!', {
          duration: 3000,
        });
        this.router.navigate(['/auth/signin']);
        return of({ status });
      }),

      // on retourne true ou false en fonction du status ( et donc de la permission )
      map((response: { status: number } | User) => {
        if ('status' in response) {
          return !(401 === response.status || 403 === response.status);
        } else {
          if (!response.roles.includes('ROLE_ADMIN') && 'admin' in next.data) {
            this.router.navigate(['/dash/home']);
            this.snackBar.open('Vous n\'avez pas les privilèges requis pour accéder a cette page', 'OK!', {
              duration: 3000,
            });
            return false;
          } else {
            return true;
          }
        }
      })
    );
  }

}


















