import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) { }

  getAllFacilitiesByCarParkId(id:string){
    const headers = new HttpHeaders({
      'X-TenantId': "meta",
    });
    // return this.http.get(`http://localhost:8081/api/facilities/car-park/${id}?tenantId=meta`, { headers });
    return this.http.get(`http://localhost:8081/api/facilities/car-park/${id}`);
  }

  updateFacility(id:any){
    return this.http.get(`http://localhost:8081/api/facilities/update/${id}`);
  }
  
}

