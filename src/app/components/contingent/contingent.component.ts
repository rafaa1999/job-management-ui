import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContingentService } from 'src/app/services/contingent.service';

@Component({
  selector: 'app-contingent',
  templateUrl: './contingent.component.html',
  styleUrls: ['./contingent.component.css']
})
export class ContingentComponent implements OnInit{

  contingents:any[] = [];

  facilityId:any = ''

  carParkId:any = ''

  constructor(private route:ActivatedRoute,private service:ContingentService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id")
      if(id){
          this.getAllContingentsByCounterId(id);
      }
    }) 
  }

  getAllContingentsByCounterId(id:string){
    this.service.getAllContingentsByCounterId(id).subscribe((data:any) => {
      console.log(data)
      this.facilityId = data[0].counter.facility.id
      this.carParkId = data[0].counter.facility.carPark.id
      console.log(this.facilityId)
      this.contingents = data
    },err => {
      console.log(err)
    })
  }

}

