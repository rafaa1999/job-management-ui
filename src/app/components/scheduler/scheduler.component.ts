import { Component, OnInit } from '@angular/core';
import { SchedulerService } from './scheduler.service';
import { ServerResponseCode } from './response.code.constants';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  scheduleExpiration:boolean = false;

  isEditMode: boolean = false;

  schedulerForm?:FormGroup;

  constructor(private service:SchedulerService,
              private fb:FormBuilder
  ){}

  ngOnInit(): void {
      this.jobNameStatus = "";

      this.schedulerForm = this.fb.group({
        jobName: [''],
        date: [''],
        hour: [''],
        minute: [''],
        cronExpression: ['0 0/1 * 1/1 * ? *']
      })

      this.getJobs();
      this.setDate();
  }

  setDate(): void {
    let date = new Date();
    this.schedulerForm?.patchValue({
        date: date.getFullYear() + "/" + date.getMonth() + 1 + "/" + date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes()
      });
      console.log(date.getFullYear() + "/" + date.getMonth() + 1 + "/" + date.getDate())
  }

  resetForm(){
    var dateNow = new Date();
    this.schedulerForm?.patchValue({
        jobName: "",
        date: dateNow.getFullYear() + "/" + dateNow.getMonth() + 1 + "/" + dateNow.getHours(),
        hour: dateNow.getHours(),
        minute: dateNow.getMinutes()
      });
    this.jobNameStatus = "";
  }

  getFormattedDate(date:any, hour:any, minute:any) {
    return date + " " + hour+":"+minute;
  }

  getJobs(){
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
    let data = {
      "jobName": jobName
    }
    this.service.startJobNow(data).subscribe(
      (success:any) => {
        if(success.statusCode == ServerResponseCode.SUCCESS && success.data == true){
          alert("Job started successfully.")
          
        }else if(success.data == false){
          if(success.statusCode == ServerResponseCode.ERROR){
              alert("Server error while starting job.");

          }else if(success.statusCode == ServerResponseCode.JOB_ALREADY_IN_RUNNING_STATE){
            alert("Job is already started.");

          }else if(success.statusCode == ServerResponseCode.JOB_DOESNT_EXIST){
            alert("Job no longer exist.");
          }
        }
        
        //For updating fresh status of all jobs 
        this.getJobs();
      },
      err => {
        alert("Error while starting job now.");
      });

    //For updating fresh status of all jobs 
    this.getJobs();

  } 

  pauseJob(jobName:any){
    let data = {
      "jobName": jobName
    }
    this.service.pauseJob(data).subscribe(
      (success:any) => {
        if(success.statusCode == ServerResponseCode.SUCCESS && success.data == true){
          alert("Job paused successfully.")
          
        }else if(success.data == false){
          if(success.statusCode == ServerResponseCode.JOB_ALREADY_IN_RUNNING_STATE){
              alert("Job already started/completed, so cannot be paused.");
          }
        }
        this.getJobs();
      },
      err => {
        alert("Error while pausing job");
      });

    //For updating fresh status of all jobs 
    this.getJobs();
  }

  resumeJob(jobName:any){
    let data = {
      "jobName": jobName
    }
   this.service.resumeJob(data).subscribe(
    (success:any) => {
      if(success.statusCode == ServerResponseCode.SUCCESS && success.data == true){
          alert("Job resumed successfully.")
        
        }else if(success.data == false){
          if(success.statusCode == ServerResponseCode.JOB_NOT_IN_PAUSED_STATE){
              alert("Job is not in paused state, so cannot be resumed.");
          }
        }
        
        //For updating fresh status of all jobs 
        this.getJobs();
    },
    err => {
      alert("Error while resuming job");
    }); 
    
    //For updating fresh status of all jobs 
    this.getJobs();
  }

  deleteJob(jobName:any){
    let data = {
      "jobName": jobName
    }
    console.log("delete job is running")
    console.log(`the job name is ${jobName  }`)
    this.service.deleteJob(data).subscribe(
      (success:any) => {
          if(success.statusCode == ServerResponseCode.SUCCESS && success.data == true){
            alert("Job deleted successfully.");
          
          }else if(success.data == false){
            if(success.statusCode == ServerResponseCode.JOB_ALREADY_IN_RUNNING_STATE){
                alert("Job is already started/completed, so cannot be deleted.");

            }else if(success.statusCode == ServerResponseCode.JOB_DOESNT_EXIST){
              alert("Job no longer exist.");
            }
          }

          //For updating fresh status of all jobs
          this.getJobs();
      },
      err => {
        alert("Error while deleting job");
      });
  }

  stopJob(jobName:any){
    let data = {
      "jobName": jobName
    }
    this.service.stopJob(data).subscribe(
      (success:any) => {
        if(success.statusCode == ServerResponseCode.SUCCESS && success.data == true){
          alert("Job stopped successfully.")
          
        }else if(success.data == false){
          if(success.statusCode == ServerResponseCode.JOB_NOT_IN_RUNNING_STATE){
            alert("Job not started, so cannot be stopped.");

          }else if(success.statusCode == ServerResponseCode.JOB_ALREADY_IN_RUNNING_STATE){
            alert("Job already started.");

          }else if(success.statusCode == ServerResponseCode.JOB_DOESNT_EXIST){
            alert("Job no longer exist.");
          }
        }

        //For updating fresh status of all jobs 
        this.getJobs();
      },
      err => {
        alert("Error while pausing job");
      });
  }

  editJob(jobName:any){
    
  }

  scheduleJob(){
    console.log("schedule job")
  }

  updateJob(){
    console.log("update job")
  }

  cancelEdit(){
    console.log("cancel job")
  }
  




}
