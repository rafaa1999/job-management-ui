import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacilityService } from 'src/app/services/facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit{

  facilities:any[] = []

  constructor(private route:ActivatedRoute,private service:FacilityService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id")
      if(id){
          this.getAllFacilitiesByCarParkId(id);
      }
    })
  }

  getAllFacilitiesByCarParkId(id:string){
    this.service.getAllFacilitiesByCarParkId(id).subscribe((data:any) => {
      console.log(data)
      this.facilities = data
    },err => {
      console.log(err)
    })
  }

  

}
