import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityService } from 'src/app/services/facility.service';
import { MenuItem, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit{

  facilities:any[] = []

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  facilityForm!:FormGroup

  id:any = ""

  visible: boolean = false;

  isDeleted?:boolean

  facilityTypes:any[] = ["PARKING_LOTS","PARKING_GARAGES","PARK_AND_RIDE",
    "VALET_PARKING","SMART_PARKING"
  ]

  constructor(private router:ActivatedRoute,
              private service:FacilityService,
              private route:Router,
              private fb:FormBuilder,
              private messageService:MessageService) { }

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
    this.createForm()
  }

  getAllFacilitiesByCarParkId(id:string){
    this.service.getAllFacilitiesByCarParkId(id).subscribe((data:any) => {
      console.log(data)
      this.facilities = data
    },err => {
      console.log(err)
    })
  }

  createForm(){
    this.facilityForm = this.fb.group({
      locationId: ['',Validators.required],
      facilityType: ['',Validators.required],
      facilityNumber: ['',Validators.required],
      facilityName: ['',Validators.required],
      // description: [''],
      // isDeleted: [''],
    })
  }

  showUpdate(){
    this.visible = true;
  }
  
  updateFacility(id:any){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Facility was Updated' })

    let model = {
      locationId: this.facilityForm.value.locationId,
      facilityType: this.facilityForm.value.facilityType,
      facilityNumber: this.facilityForm.value.facilityNumber,
      facilityName: this.facilityForm.value.facilityName,
    }
    
    this.facilityForm.reset()
    console.log(model)
    console.log(id)
    this.visible = false;
  }
  
  cancleUpdate(){
    this.visible = false;
    this.messageService.add({ severity: 'error', summary: 'Cancle', detail: 'Update Facility was Cancled' })
  }
  
}
