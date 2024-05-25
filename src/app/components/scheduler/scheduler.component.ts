import { Component, OnInit } from '@angular/core';
import { SchedulerService } from './scheduler.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  checked: boolean = false;

  constructor(private service:SchedulerService){}

  jobs:any[] = []

  ngOnInit(): void {
      this.handleJob();
  }

  handleJob(){
    this.service.getJobs().subscribe((data:any)=>{
      console.log(data)
    },err => {
      console.log(err)
    })
  }

}
