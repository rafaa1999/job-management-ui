import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobDetailsService } from 'src/app/services/job-details.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit{


  histories?:any[]

  ngOnInit(): void {
    this.getAllHistories();
  }

  constructor(private service:JobDetailsService){}
  
  getAllHistories(){
    this.service.getAllHistories().subscribe((data:any) => {
      console.log(data)
    },err => {
      console.log(err)
    })
  }


}


