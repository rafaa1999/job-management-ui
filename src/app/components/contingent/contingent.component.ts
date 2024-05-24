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
      this.contingents = data
    },err => {
      console.log(err)
    })
  }

}

