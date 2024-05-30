import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from 'src/app/services/counter.service';
import { MenuItem,MessageService } from 'primeng/api';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counters: any[] = []

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  id:any = ''

  carParkId:any = ''

  simulation:boolean = true

  value:number = 0

  constructor(private route:ActivatedRoute,
              private service:CounterService,
              private messageService:MessageService ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
      if(this.id){
          this.getAllCountersByFacilityId(this.id);
      }
    })    
    this.items = [{ icon: 'pi pi-home', routerLink:"/carParks"}, 
                  { label: 'Car-Parks', routerLink:"/carParks" }, 
                  { label: 'Facilities', routerLink:`/facilities/car-park/${this.id}`}, 
                  {label: this.id}
                ];
  }

  getAllCountersByFacilityId(id:string){
    this.service.getAllCountersByFacilityId(id).subscribe((data:any) => {
      console.log(data)
      this.carParkId = data[0].facility.carPark.id
      console.log(this.carParkId)
      this.counters = data
    },err => {
      console.log(err)
    })
  }

  handleSimulation(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Car Simulation Is Starting' })
    console.log("handle simulation")
  }

  simulateAdd(id:any){
    // console.log(id)
    this.service.simulateAdd(id).subscribe((data:any) => {
      this.counters
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Car Enter Simulation' })
    },err => {
      console.log(err)
    })
  }

  simulateDelete(id:any){
    // console.log(id)
    this.service.simulateDelete(id).subscribe((data:any) => {
      this.counters
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Car Exit Simulation' })
    },err => {
      console.log(err)
    })
  }
}

