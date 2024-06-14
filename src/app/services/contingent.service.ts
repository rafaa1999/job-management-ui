import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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


  getAllContingents(){
    return this.http.get(`http://localhost:8081/api/contingents`);
  }

  saveContingent(data:any){
      console.log(data)
      let params = new HttpParams();
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          params = params.append(key, data[key]);
        }
      }
      return this.http.get(`http://localhost:8081/api/contingents/add`, { params: params });
  }
}
