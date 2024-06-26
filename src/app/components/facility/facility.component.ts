import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityService } from 'src/app/services/facility.service';
import { MenuItem, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

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

  isDeleted?:boolean = false

  desctiption:any = '';

  disabled:boolean = false

  visibleAdd:boolean = false

  facilityAddForm!: FormGroup

  deletebtn:boolean = false

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
    })
    this.facilityAddForm = this.fb.group({
      locationId: ['',Validators.required],
      facilityType: ['',Validators.required],
      facilityNumber: ['',Validators.required],
      facilityName: ['',Validators.required],
      reservedCapacity: ['',Validators.required],
      nonReservedCapacity: ['',Validators.required],
      preBooked: ['',Validators.required]
    })
  }

  showUpdate(){
    this.visible = true;
  }
  
  updateFacility(id:any){

    console.log(this.isDeleted)

    let model = {
      locationId: this.facilityForm.value.locationId,
      facilityType: this.facilityForm.value.facilityType,
      facilityNumber: this.facilityForm.value.facilityNumber,
      facilityName: this.facilityForm.value.facilityName,
      isDeleted: this.isDeleted,
      description: this.desctiption
    }
    console.log(model.locationId )
    
    if(model.locationId === ""  ||
      model.facilityType === "" ||
      model.facilityName  === "" ||
      model.facilityNumber === "" ||
      model.facilityType === ""
     ){
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'You Should fill the required input !' })
      return;
    }
    
    this.service.updateFacility(id,model).subscribe((res:any) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Facility was Updated' })
      this.facilityForm.reset()
      this.desctiption = ""
      this.isDeleted = false
      this.service.getAllFacilitiesByCarParkId(this.id).subscribe((data:any) => {
        this.facilities = data
      },err => {
        console.log(err)
      })
    },error => {
      console.log(error)
    })

    

    console.log(model)
    console.log(id)
    this.visible = false;
  }
  
  cancleUpdate(){
    this.visible = false;
    this.messageService.add({ severity: 'error', summary: 'Cancle', detail: 'Update Facility was Cancled' })
  }

  onchangeDesctiption(event:any){
    this.desctiption = event.target.value
  }
 
  onchangeIsDisabled(event: any) {
    const isDisabled = event.checked;
  }

  add(){
    this.visibleAdd = true
  }
  
  addFacility(){
    
    let model = {
      locationId: this.facilityAddForm.value.locationId,
      facilityType: this.facilityAddForm.value.facilityType,
      facilityNumber: this.facilityAddForm.value.facilityNumber,
      facilityName: this.facilityAddForm.value.facilityName,
      reservedCapacity:this.facilityAddForm.value.reservedCapacity,
      nonReservedCapacity:this.facilityAddForm.value.nonReservedCapacity,
      preBooked:this.facilityAddForm.value.preBooked
    }
    // console.log(model.locationId )
    
    // if(model.locationId === ""  ||
    //   model.facilityType === "" ||
    //   model.facilityName  === "" ||
    //   model.facilityNumber === "" ||
    //   model.facilityType === ""
    //  ){
    //   this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'You Should fill the required input !' })
    //   return;
    // }
    
    // this.service.getAllFacilitiesByCarParkId(this.id).subscribe((data:any) => {
    //     this.facilities = data
    // },err => {
    //   console.log(err)
    // })
    console.log(this.id)
    this.service.addFacility(this.id,model).subscribe((data:any) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Facility was added' })
    },err => {
      console.log(err)
    })

    console.log(model)
    this.visibleAdd = false;
  }

  showDelete(){
    this.deletebtn = true
  }

  cancleDelete(){
    this.deletebtn = false
    this.messageService.add({ severity: 'error', summary: 'Cancle', detail: 'Delete Facility was Cancled' })
  }

  deleteFacility(id:any){
    console.log("welcome to get more")
    this.service.deleteFacility(id).subscribe((data:any) => {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Facility was Deleted' })
    this.deletebtn = false
    this.service.getAllFacilitiesByCarParkId(this.id).subscribe((data:any) => {
      this.facilities = data
    },err => {
      console.log(err)
    })
    },err => {
      console.log(err)
    })

   
    
  }

}
