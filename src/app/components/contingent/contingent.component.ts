import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContingentService } from 'src/app/services/contingent.service';
import { MessageService } from 'primeng/api';
import { CarParkService } from 'src/app/services/car-park.service';
import { FacilityService } from 'src/app/services/facility.service';


@Component({
  selector: 'app-contingent',
  templateUrl: './contingent.component.html',
  styleUrls: ['./contingent.component.css']
})
export class ContingentComponent implements OnInit{

  contingents:any[] = [];

  facilityId:any = ''

  carParkId:any = ''

  contingentForm!:FormGroup

  carParks: any[] = [];

  facilities: any[] = [];


  constructor(private route:ActivatedRoute,
              private service:ContingentService,
              private fb:FormBuilder,
              private serviceCarPark:CarParkService,
              private serviceFacility:FacilityService){}

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get("id")
    //   if(id){
    //       this.getAllContingentsByCounterId(id);
    //   }
    // }) 

    this.createForm()

    this.getAllCarParks()

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

  createForm(){
    this.contingentForm = this.fb.group({
      name: ['', Validators.required],
      normalDayValue: ['', Validators.required],
      normalDate: ['', Validators.required],
      weekDate: ['', Validators.required],
      weekendDayValue: ['', Validators.required],
      carPark: ['', Validators.required],
      facility: ['', Validators.required],
    });
  }

  resetForm(){
    this.contingentForm = this.fb.group({
      name: ['', Validators.required],
      normalDayValue: ['', Validators.required],
      normalDate: ['', Validators.required],
      weekDate: ['', Validators.required],
      weekendDayValue: ['', Validators.required],
      carPark: ['Select CarPark', Validators.required],
      facility: ['Select Facility', Validators.required],
    });
  }

  submit(){
    console.log("welcome")
    console.log(this.contingentForm.value)
  }

  carParkChange(event:any){
    this.contingentForm.patchValue({
      carPark: event.target.value,
    });
    console.log("one")
    console.log(
      this.contingentForm.value.carPark
    )
    this.getFacilitiesByCarPakId(event.target.value)
  }

  facilityChange(event:any){
    this.contingentForm.patchValue({
      facility: event.target.value,
    });
  }

  getAllCarParks(){
    this.serviceCarPark.getAllCarParks().subscribe((data:any) => {
      console.log("Get All CarParks")
      let id = data[0].id
      this.carParks = data
      this.getFacilitiesByCarPakId(id)
    },err => {
      console.log(err)
    })
  }

  getFacilitiesByCarPakId(id:any){
    this.serviceFacility.getAllFacilitiesByCarParkId(id).subscribe((data:any) => {
      console.log("Get All Facilities")
      console.log(data)
      this.facilities = data
    },err => {
      console.log(err)
    })
  }

}
