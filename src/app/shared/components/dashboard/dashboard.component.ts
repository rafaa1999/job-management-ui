import { Component, OnInit } from '@angular/core';
import { ServerResponseCode } from 'src/app/components/scheduler/response.code.constants';
import { SchedulerService } from 'src/app/components/scheduler/scheduler.service';

import {TranslateService} from "@ngx-translate/core"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products:any[] = []

  data: any;

  options: any;

  cronExpression: string = '0 0 12 * * ?'; 

  jobRecords: any[] = [];

  enabledJob: number = 0 

  disabledJob: number = 0

  successfulJob: number = 0

  failedJob: number = 0
  
  carParkId:any


  constructor(private service:SchedulerService,
              private translateService: TranslateService
  ){
    const userLang = navigator.language || 'en';
    console.log(userLang)
    const languageCode = userLang.split('-')[0]
    console.log(languageCode)
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
  }


  ngOnInit(): void {

    this.getJobs();

    this.products = [
      {code: "Cronjob execution: Successful", name: "Today at 11:15:01 AM", category: "phone", quantity:23},
      {code: "Cronjob execution: Successful", name: "Today at 11:15:01 AM", category: "phone", quantity:23},
      {code: "Cronjob execution: Successful", name: "Today at 11:15:01 AM", category: "phone", quantity:23},
      {code: "Cronjob execution: Successful", name: "Today at 11:15:01 AM", category: "phone", quantity:23},
    ]

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
        labels: ['Enabled Job', 'Disabled Job', 'Successful Job', 'Failed Job'],
        // labels: ['A', 'B', 'C'],
        datasets: [
            {
                // data: [540, 325, 702],
                data: [40, 10, 20,30],
                // data: [this.enabledJob, this.disabledJob, this.successfulJob],
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'),documentStyle.getPropertyValue('--red-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400'),documentStyle.getPropertyValue('--red-400')]
            }
        ]
    };

    this.options = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };

  }

  getJobs() {
    this.service.getJobs().subscribe(
      (data: any) => {
        console.log(data);
        if (data.statusCode == ServerResponseCode.SUCCESS) {
          this.jobRecords = data.data;
        //   this.enabledJob = this.jobRecords.length;
        for(let i of this.jobRecords){
            if(i.jobStatus === 'SCHEDULED'){
                this.enabledJob += 1;
                // console.log(this.enabledJob)
            }
            if(i.jobStatus === 'PAUSED'){
              this.disabledJob += 1;
              // console.log(this.disabledJob)
            }
        }
        // console.log(this.enabledJob)
        } else {
          alert('Some error while fetching jobs');
        }
      },
      (err) => {
        alert('Error while getting all jobs');
      }
    );
  }

  jobDetail(jobjobName:any){
    console.log(jobjobName)
  }


}