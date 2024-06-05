import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContingentService {

  constructor(private http: HttpClient) { }

  getAllContingentsByCounterId(id:string){
    const headers = new HttpHeaders({
      'X-TenantId': "meta",
    });
    // return this.http.get(`http://localhost:8081/api/contingents/counter/${id}?tenantId=meta`, { headers });
    return this.http.get(`http://localhost:8081/api/contingents/counter/${id}`);
  }
}
