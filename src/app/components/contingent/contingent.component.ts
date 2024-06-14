import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
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

  customers:any[] = [];

  constructor(private route:ActivatedRoute,
              private serviceContingent:ContingentService,
              private fb:FormBuilder,
              private serviceCarPark:CarParkService,
              private serviceFacility:FacilityService){}

  ngOnInit(): void {

    this.createForm()

    this.getAllCarParks()

    this.customers = [
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
      {name:"customers"},
    ]

    this.getAllContingents()

  }

  // getAllContingentsByCounterId(id:string){
  //   this.service.getAllContingentsByCounterId(id).subscribe((data:any) => {
  //     console.log(data)
  //     this.facilityId = data[0].counter.facility.id
  //     this.carParkId = data[0].counter.facility.carPark.id
  //     console.log(this.facilityId)
  //     this.contingents = data
  //   },err => {
  //     console.log(err)
  //   })
  // }

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
      carPark: ['', Validators.required],
      facility: ['', Validators.required],
    });
  }

  submit(){
    // console.log("welcome")
    // console.log(this.contingentForm.value)

    let startDateForNormalDate = new Date(this.contingentForm.value.normalDate[0]);
    let endDateForNormalDate = new Date(this.contingentForm.value.normalDate[1]);

    let startDateForWeekendDate = new Date(this.contingentForm.value.weekDate[0]);
    let endDateForWeekendDate = new Date(this.contingentForm.value.weekDate[1]);

    let options:any = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    };

    let formattedStartDateForNormalDate = startDateForNormalDate.toLocaleDateString('en-US', options);
    let formattedEndDateForNormalDate = endDateForNormalDate.toLocaleDateString('en-US', options);

    let formattedStartDateForWeekendDate = startDateForWeekendDate.toLocaleDateString('en-US', options);
    let formattedendDateForWeekendDate = endDateForWeekendDate.toLocaleDateString('en-US', options);

    let toStringStartDateForNormalDate = formattedStartDateForNormalDate.toString()
    let toStringEndDateForNormalDate = formattedEndDateForNormalDate.toString()

    let toStringStartDateForWeekendDate = formattedStartDateForWeekendDate.toString()
    let toStringEndDateForWeekendDate = formattedendDateForWeekendDate.toString()

    let finalStartDateForNormalDate = toStringStartDateForNormalDate.split("/")[2] + "/" + toStringStartDateForNormalDate.split("/")[0] + "/" + toStringStartDateForNormalDate.split("/")[1]
    let finalEndDateForNormalDate = toStringEndDateForNormalDate.split("/")[2] + "/" + toStringEndDateForNormalDate.split("/")[0] + "/" + toStringEndDateForNormalDate.split("/")[1]

    let finalStartDateForWeekendDate = toStringStartDateForWeekendDate.split("/")[2] + "/" + toStringStartDateForWeekendDate.split("/")[0] + "/" + toStringStartDateForWeekendDate.split("/")[1]
    let finalEndDateForWeekendDate = toStringEndDateForWeekendDate.split("/")[2] + "/" + toStringEndDateForWeekendDate.split("/")[0] + "/" + toStringEndDateForWeekendDate.split("/")[1]

    // console.log(finalStartDateForNormalDate)
    // console.log(finalEndDateForNormalDate)

    // console.log(finalStartDateForWeekendDate)
    // console.log(finalEndDateForWeekendDate)

    // console.log(this.contingentForm.value.normalDayValue)
    // console.log(this.contingentForm.value.weekendDayValue)
    
    let model = {
      name: this.contingentForm.value.name,
      normalValue: this.contingentForm.value.normalDayValue,
      weekendValue: this.contingentForm.value.weekendDayValue,
      normalDate: finalStartDateForNormalDate + "-" + finalEndDateForNormalDate,
      weekendDate: finalStartDateForWeekendDate + "-" + finalEndDateForWeekendDate,
      carParkId: this.contingentForm.value.carPark,
      facilityId: this.contingentForm.value.facility
    }

    console.log(model)

    this.serviceContingent.saveContingent(model).subscribe((data:any) => {
      console.log("serviceContinget.saveContinget(model)")
      console.log(data)
    },err => {
      console.log(err)
    })

    this.resetForm()
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

  getAllContingents(){
      this.serviceContingent.getAllContingents().subscribe((data:any) => {
        console.log("Get All Contingents")
        console.log(data)
        this.contingents = data
      },err => {
        console.log(err)
      })
  }

  updateContingent(id:any){
    console.log(id)
  }

  deleteContingent(id:any){
    console.log(id)
  }

}