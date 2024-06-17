import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityService } from 'src/app/services/facility.service';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit{

  facilities:any[] = []

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  facilityForm?:FormGroup

  id:any = ""

  visible: boolean = false;


  constructor(private router:ActivatedRoute,
              private service:FacilityService,
              private route:Router,
              private fb:FormBuilder){}

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

  showUpdate(){
    this.visible = true;
  }

  updateFacility(id:any){

    
    let model = {
      
    }
    
    console.log(id)
    
    this.visible = false;
  }
  
  
}
