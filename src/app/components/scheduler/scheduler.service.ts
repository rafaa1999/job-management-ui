import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private getJobsUrl = "scheduler/jobs";
  private scheduleJobUrl = "scheduler/schedule";
  private pauseJobUrl = "scheduler/pause";
  private resumeJobUrl = "scheduler/resume";
  private deleteJobUrl = "scheduler/delete";
  private updateJobUrl = "scheduler/update";
  private isJobWithNamePresentUrl = "scheduler/checkJobName";
  private stopJobUrl = "scheduler/stop";
  private startJobNowUrl = "scheduler/start";

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  // getAllCarParks(){
  //   const headers = new HttpHeaders({
  //     'X-TenantId': "meta",
  //   });
  //   return this.http.get("http://localhost:8081/api/car-parks?tenantId=meta", { headers });
  // }


  constructor(private http: HttpClient) {}

  // getJobs(): Observable<any> {
  //   return this.http.get(this.getJobsUrl).pipe(map(resData => resData));
  // }

  getJobs(){
    return this.http.get("http://localhost:8081/scheduler/jobs?tenantId=meta")
  }

  scheduleJob(data:any){
    let params = new HttpParams();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }
    return this.http.get("http://localhost:8081/scheduler/schedule?tenantId=meta",{headers: this.headers, params: params})    
  }

  // scheduleJob(data: any): Observable<any> {
  //   let params = new HttpParams();
  //   for (let key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       params = params.append(key, data[key]);
  //     }
  //   }
  //   return this.http.get(this.scheduleJobUrl, { headers: this.headers, params: params })
  //     .pipe(map(resData => resData));
  // }

  isJobWithNamePresent(data:any){
    let params =  new HttpParams();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    } 
    return this.http.get("http://localhost:8081/scheduler/checkJobName?tenantId=meta",{headers: this.headers, params: params})    
            .pipe(map(resData => resData))
  }

  // isJobWithNamePresent(data: any): Observable<any> {
  //   let params = new HttpParams();
  //   for (let key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       params = params.append(key, data[key]);
  //     }
  //   }
  //   return this.http.get(this.isJobWithNamePresentUrl, { headers: this.headers, params: params })
  //     .pipe(map(resData => resData));
  // }

  pauseJob(data: any){
    let params = new HttpParams();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }
    return this.http.get("http://localhost:8081/scheduler/pause?tenantId=meta", { headers: this.headers, params: params })
      .pipe(map(resData => resData));
  }

  // pauseJob(data: any): Observable<any> {
  //   let params = new HttpParams();
  //   for (let key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       params = params.append(key, data[key]);
  //     }
  //   }
  //   return this.http.get(this.pauseJobUrl, { headers: this.headers, params: params })
  //     .pipe(map(resData => resData));
  // }

  resumeJob(data: any){
    let params = new HttpParams();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }
    return this.http.get("http://localhost:8081/scheduler/resume?tenantId=meta", { headers: this.headers, params: params })
      .pipe(map(resData => resData));
  }

  // resumeJob(data: any): Observable<any> {
  //   let params = new HttpParams();
  //   for (let key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       params = params.append(key, data[key]);
  //     }
  //   }
  //   return this.http.get(this.resumeJobUrl, { headers: this.headers, params: params })
  //     .pipe(map(resData => resData));
  // }

  deleteJob(data: any){
    let params = new HttpParams();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }
    return this.http.get("http://localhost:8081/scheduler/delete?tenantId=meta", { headers: this.headers, params: params })
      .pipe(map(resData => resData));
  }

  // deleteJob(data: any): Observable<any> {
  //   let params = new HttpParams();
  //   for (let key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       params = params.append(key, data[key]);
  //     }
  //   }
  //   return this.http.get(this.deleteJobUrl, { headers: this.headers, params: params })
  //     .pipe(map(resData => resData));
  // }

  stopJob(data: any){
    let params = new HttpParams();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }
    return this.http.get("http://localhost:8081/scheduler/stop?tenantId=meta", { headers: this.headers, params: params })
      .pipe(map(resData => resData));
  }

  // stopJob(data: any): Observable<any> {
  //   let params = new HttpParams();
  //   for (let key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       params = params.append(key, data[key]);
  //     }
  //   }
  //   return this.http.get(this.stopJobUrl, { headers: this.headers, params: params })
  //     .pipe(map(resData => resData));
  // }

  startJobNow(data:any){
    let params = new HttpParams();
      for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }
    return this.http.get("http://localhost:8081/scheduler/start?tenantId=meta", { headers: this.headers, params: params })
      .pipe(map(resData => resData));
  }

  // startJobNow(data: any): Observable<any> {
  //   let params = new HttpParams();
  //   for (let key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       params = params.append(key, data[key]);
  //     }
  //   }
  //   return this.http.get(this.startJobNowUrl, { headers: this.headers, params: params })
  //     .pipe(map(resData => resData));
  // }

  updateJob(data:any){
    let params = new HttpParams();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }
    return this.http.get("http://localhost:8081/scheduler/update?tenantId=meta", { headers: this.headers, params: params })
      .pipe(map(resData => resData));
  }

  // updateJob(data: any): Observable<any> {
  //   let params = new HttpParams();
  //   for (let key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       params = params.append(key, data[key]);
  //     }
  //   }
  //   return this.http.get(this.updateJobUrl, { headers: this.headers, params: params })
  //     .pipe(map(resData => resData));
  // }
}
