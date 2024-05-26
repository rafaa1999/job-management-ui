import { Component, OnInit } from '@angular/core';
import { SchedulerService } from './scheduler.service';
import { ServerResponseCode } from './response.code.constants';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  checked: boolean = false;

  jobNameStatus?: String;

  jobRecords:any[] = [];

  cal:any

  constructor(private service:SchedulerService){}

  jobs:any[] = []

  ngOnInit(): void {
      this.handleJob();
  }

  handleJob(){
    this.service.getJobs().subscribe((data:any)=>{
      console.log(data)
      if(data.statusCode == ServerResponseCode.SUCCESS){
        this.jobRecords = data.data;
      }else{
        alert("Some error while fetching jobs");
      }
    },err => {
      alert("Error while getting all jobs");
    })
  }

  checkJobExistWith(jobName:any){
    var data = {
      "jobName": jobName
    }
    this.service.isJobWithNamePresent(data).subscribe(
    (success:any) => {
      if(success.statusCode == ServerResponseCode.SUCCESS){
        if(success.data == true){
          this.jobNameStatus = "This JobName is already exist !!!";
        }else{
          this.jobNameStatus = "This JobName is not exist !!!";
        }
      }else if(success.statusCode == ServerResponseCode.JOB_NAME_NOT_PRESENT){
        alert("Job name is mandatory.");
      }
    },
    err => {
      alert("Error while checkinh job with name exist.");
    });
    this.jobNameStatus = ""; 
  }

  handleBtn(){
    console.log(this.cal)
  }


  onDateChange(event: any): void {
    this.cal = event.value;
    console.log('Selected date:', this.cal);
  }


  startJobNow(jobName:any){

  }

  pauseJob(jobName:any){

  }

  resumeJob(jobName:any){

  }

  deleteJob(jobName:any){

  }

  stopJob(jobName:any){

  }

  editJob(jobName:any){

  }
  




}
