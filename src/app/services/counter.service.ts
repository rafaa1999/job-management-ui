import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {


  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllCountersByFacilityId(id:string){
    const headers = new HttpHeaders({
      'X-TenantId': "meta",
    });
    return this.http.get(`http://localhost:8081/api/counters/facility/${id}?tenantId=meta`, { headers });
  }

  simulateAdd(id: any){
    // console.log(id)
    // console.log(`http://localhost:8081/scheduler/simulation/${id}?tenantId=meta`)
    return this.http.get(`http://localhost:8081/scheduler/simulation/add/${id}?tenantId=meta`,{headers: this.headers})    
    .pipe(map(resData => resData));
    // return this.http.get(`http://localhost:8081/scheduler/simulation/${id}/?tenantId=meta`, { headers: this.headers })
  }

  simulateDelete(id: any){
    // console.log(id)
    // console.log(`http://localhost:8081/scheduler/simulation/${id}?tenantId=meta`)
    return this.http.get(`http://localhost:8081/scheduler/simulation/delete/${id}?tenantId=meta`,{headers: this.headers})    
    .pipe(map(resData => resData));
    // return this.http.get(`http://localhost:8081/scheduler/simulation/${id}/?tenantId=meta`, { headers: this.headers })
  }

}
