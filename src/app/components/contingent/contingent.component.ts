import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContingentService } from 'src/app/services/contingent.service';
import { MessageService } from 'primeng/api';

interface CarPark {
  name: string;
}

interface Facility {
  name: string;
}


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
  selectedCarPark!: CarPark;

  facilities: any[] = [];
  selectedFacility!: Facility ;

  constructor(private route:ActivatedRoute,
              private service:ContingentService,
              private fb:FormBuilder){}

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get("id")
    //   if(id){
    //       this.getAllContingentsByCounterId(id);
    //   }
    // }) 

    this.carParks = [
      {name:"one"}
    ]

    this.facilities = [
      {name:"one"}
    ]

    this.createForm()

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

  // private UUID id;
  // private String name;
  // private Integer value;
  // @Column(name = "start_date")
  // private String startDate;
  // @Column(name = "end_date")
  // private String endDate;
  // @Column(name = "day_of_week")
  // private String dayOfWeek;

  createForm(){
    // this.contingentForm = this.fb.group({
    //   name:['',Validators.required],
    //   normalDayValue:['',Validators.required],
    //   NormalDate:['',Validators.required],
    //   WeekDate:['',Validators.required],
    //   WeekendDayValue:['',Validators.required],
    //   carPark:['',Validators.required],
    //   facility:['',Validators.required],
    // })
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
    console.log("welcome")
    console.log(this.contingentForm.value)
  }

  carParkChange(event:any){
    this.contingentForm.patchValue({
      carPark: event.target.value,
    });
    console.log(this.contingentForm.value)
  }

  facilityChange(event:any){
    this.contingentForm.patchValue({
      facility: event.target.value,
    });
    console.log(this.contingentForm.value)
  }

}

