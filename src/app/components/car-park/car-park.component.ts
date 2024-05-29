import { Component, OnInit } from '@angular/core';
import { CarParkService } from 'src/app/services/car-park.service';

@Component({
  selector: 'app-car-park',
  templateUrl: './car-park.component.html',
  styleUrls: ['./car-park.component.css']
})
export class CarParkComponent implements OnInit {

  carParks:any[] = []
  tenant:any

  constructor(private service:CarParkService){
  }

  ngOnInit(): void {
    this.getCarParks()
  }

  getCarParks() {
    this.service.getAllCarParks() 
      .subscribe((data: any) => {
        console.log(data); 
        // this.tenant = data
        this.carParks = data;
      }, (err) => {
        console.error(err);
      });
  }

  one(id:any){
    console.log("welcome to get more information !!!")
    console.log(id)
  }


}
