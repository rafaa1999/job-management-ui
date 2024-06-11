import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../scheduler/scheduler.service';
import { ServerResponseCode } from '../scheduler/response.code.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem,MessageService } from 'primeng/api';
import { JobDetailsService } from 'src/app/services/job-details.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit{

  jobRecords: any[] = [];
  jobDetails: any[] = []
  jobName:any
  items?: MenuItem[];
  histories:any[] = []

  constructor(private service:SchedulerService,private router:ActivatedRoute,
    private messageService:MessageService,private detailService:JobDetailsService
  ){

  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.jobName = params.get("jobName")
      console.log(this.jobName)
    })
    this.getJobs();
    this.items = [
      {
          label: 'Update',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          command: () => {
              this.delete();
          }
      },
      { label: 'Angular Website', url: 'http://angular.io' },
      { separator: true },
      { label: 'Upload', routerLink: ['/fileupload'] }
    ];

    this.getAllHistories()
  }

  getJobs() {
    this.service.getJobs().subscribe(
      (data: any) => {
        console.log(data);
        if (data.statusCode == ServerResponseCode.SUCCESS) {
          this.jobRecords = data.data;
          console.log(this.jobRecords)
          for(let i of this.jobRecords){
            if(i.jobName === this.jobName){
              // this.jobDetails = i
              this.jobDetails?.push(i)
              console.log("#(*$$$&s")
              console.log(this.jobDetails)
            }
            
          }

        } else {
          alert('Some error while fetching jobs');
        }
      },
      (err) => {
        alert('Error while getting all jobs');
      }
    );
  }


  save(severity: string) {
    this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
  }

  update() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }

  one(){
    console.log("welcome")
  }


  getAllHistories(){
    this.detailService.getAllHistories().subscribe((data:any) => {
      console.log(data)
      this.histories = data.reverse()
    },err => {
      console.log(err)
    })
  }

  getHistoryByJobName(jobName:any){
    this.detailService.getHistoryByJobName(jobName).subscribe((data:any) => {
      console.log(data)
    },err => {
      console.log(err)
    })
  }
  
}

