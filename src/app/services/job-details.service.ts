import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobDetailsService {

  constructor(private http: HttpClient) { }

    getAllHistories(){
      return this.http.get("http://localhost:8081/api/history");
    }

    getHistoryByJobName(jobName:any){
      return this.http.get(`http://localhost:8081/api/history/${jobName}`);
    }

}
