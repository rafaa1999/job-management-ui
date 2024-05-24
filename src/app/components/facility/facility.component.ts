import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityService } from 'src/app/services/facility.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit{

  facilities:any[] = []

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  id:any = ""

  constructor(private router:ActivatedRoute,
              private service:FacilityService,
              private route:Router){}

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
       this.id = params.get("id")
      if(this.id){
          this.getAllFacilitiesByCarParkId(this.id);
      }
    })
    this.items = [{ icon: 'pi pi-home', routerLink:"/carParks"}, 
                  { label: 'Car-Parks', routerLink:"/carParks" }, 
                  { label: 'Facilities', }, 
                ];
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
