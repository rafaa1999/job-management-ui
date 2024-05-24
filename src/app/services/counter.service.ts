import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private http: HttpClient) { }

  getAllCountersByFacilityId(id:string){
    const headers = new HttpHeaders({
      'X-TenantId': "meta",
    });
    return this.http.get(`http://localhost:8081/api/counters/facility/${id}?tenantId=meta`, { headers });
  }
}
