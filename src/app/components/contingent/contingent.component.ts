import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContingentService } from 'src/app/services/contingent.service';
import { MessageService } from 'primeng/api';
import { CarParkService } from 'src/app/services/car-park.service';
import { FacilityService } from 'src/app/services/facility.service';
import { DatePipe } from '@angular/common';


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

  contingentName?:any

  isUpdated:boolean = false

  visible: boolean = false

  constructor(private route:ActivatedRoute,
              private serviceContingent:ContingentService,
              private fb:FormBuilder,
              private serviceCarPark:CarParkService,
              private serviceFacility:FacilityService,
              private messageService:MessageService,
              private datePipe:DatePipe){}

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

    if(model.normalValue < 0 || model.weekendValue < 0 ){
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Value should be positive !' })
      return
    }

    this.serviceContingent.saveContingent(model).subscribe((data:any) => {
      console.log("serviceContinget.saveContinget(model)")
      console.log(data)
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contingent was added' })
      this.serviceContingent.getAllContingents().subscribe((data:any) => {
          this.contingents = data
      },err => {
        console.log(err)
      })
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
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Start updating the contingent' })
    this.serviceContingent.getContingent(id).subscribe((data:any) => {
      console.log(data)
    //   const date = new Date(dateString);
    // return this.datePipe.transform(date, 'MM/dd/yyyy');
      let contingent = data

      let dateStartDate = new Date(contingent.startDate)
      let dateEndDate = new Date(contingent.endDate)

      let dateStartDayOfWeek = new Date(contingent.startDayOfWeek)
      let dateEndDayOfWeek = new Date(contingent.endDayOfWeek)

      let formatStartDate = this.datePipe?.transform(dateStartDate,'MM/dd/yyyy')
      let formatEndDate = this.datePipe?.transform(dateEndDate,'MM/dd/yyyy')

      let formatStartDayOfWeek = this.datePipe?.transform(dateStartDayOfWeek,'MM/dd/yyyy')
      let formatEndDayOfWeek = this.datePipe?.transform(dateEndDayOfWeek,'MM/dd/yyyy')

      console.log(dateStartDayOfWeek)
      console.log(formatStartDate)

      let normalDate = formatStartDate + "-" + formatEndDate
      let weekDate = formatStartDayOfWeek + '-' + formatEndDayOfWeek

      this.contingentForm = this.fb.group({
        name: [contingent.name, Validators.required],
        normalDayValue: [contingent.normalValue, Validators.required],
        normalDate: [normalDate , Validators.required],
        weekDate: [weekDate, Validators.required],
        weekendDayValue: [contingent.weekendValue, Validators.required],
        carPark: [contingent.carParkId, Validators.required],
        facility: [contingent.facilityId, Validators.required],
      })
    },err => {
      console.log(err)
    })
    this.isUpdated = true
  }

  update(){

  }

  cancle(){
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Cancle updating' })
    this.isUpdated = false
  }

  deleteContingent(id:any){
    console.log(id)
    this.serviceContingent.deleteContingent(id).subscribe((data:any) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contingent was deleted' })
    },err => {
      console.log(err)
    })
    this.visible = false
  }
  
  delete(){
    this.visible = true

  }

  contingentNameChange(event:any){
    console.log(event.target.value)
    this.contingentName = event.target.value
  }

  checkIfContingentExist(){
    console.log(this.contingentName)
    let model = {
      name: this.contingentName
    }
    this.serviceContingent.checkIfContingentExist(model).subscribe((data:any) => {
      console.log(data)
      if(!data){
        this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'This name is already exist !!!' })
      }else{
        this.messageService.add({ severity: 'info', summary: 'Warning', detail: 'This name is not exist !!!' })
      }
    },err => {
      console.log(err)
    })
  }
  
}