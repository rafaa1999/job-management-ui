import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    
  }


  selectedCity: any;

  cities: any[] = [
    { name: 'carParks' },
    { name: 'jobs' },
    { name: 'facilities' },
    { name: 'counters' },
    { name: 'contingents'}
  ];
  
}
