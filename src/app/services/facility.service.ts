import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

  updateFacility(id:any,data:any){
    let params = new HttpParams();
      for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }
    return this.http.get(`http://localhost:8081/api/facilities/update/${id}`,{ params: params });
  }
  
  addFacility(id:any,data:any){
    let params = new HttpParams();
      for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }
    return this.http.get(`http://localhost:8081/api/facilities/add/${id}`,{ params: params });
  }

  deleteFacility(id:any){
    return this.http.get(`http://localhost:8081/api/facilities/delete/${id}`);
  }



}

