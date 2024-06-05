import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TenantInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const tenantId = 'meta';
    const tenantId:any = localStorage.getItem("tenantId");
    const newRequest = request.clone({
      setParams: {
        tenantId
      }
    })
    console.log(newRequest)
    console.log(localStorage.getItem("tenantId"))
    // localStorage.getItem('token');
    return next.handle(newRequest);
  }
}
