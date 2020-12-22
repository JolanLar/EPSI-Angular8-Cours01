import { Injectable } from '@angular/core';
import {SessionService} from './services/session.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  constructor(private sessionService: SessionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const update: {headers?: HttpHeaders} = {};
    const token = this.sessionService.getToken();
    if (token) {
      update.headers = new HttpHeaders(
        {
          Authorization: `Bearer ${token}`,
        }
      );
    }

    const clonedRequest: HttpRequest<any> = req.clone(update);
    return next.handle(clonedRequest);

  }
}
