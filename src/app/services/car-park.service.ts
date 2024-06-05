  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class CarParkService {

    constructor(private http: HttpClient) { }

    getAllCarParks(){
      const headers = new HttpHeaders({
        'X-TenantId': "meta",
      });
      // return this.http.get("http://localhost:8081/api/car-parks?tenantId=meta", { headers });
      return this.http.get("http://localhost:8081/api/car-parks");
    }

  }