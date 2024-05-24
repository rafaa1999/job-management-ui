import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counters: any[] = []

  constructor(private route:ActivatedRoute,private service:CounterService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id")
      if(id){
          this.getAllCountersByFacilityId(id);
      }
    })    
  }

  getAllCountersByFacilityId(id:string){
    this.service.getAllCountersByFacilityId(id).subscribe((data:any) => {
      console.log(data)
      this.counters = data
    },err => {
      console.log(err)
    })
  }

}
