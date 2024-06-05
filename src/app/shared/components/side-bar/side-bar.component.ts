import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SchedulerService } from 'src/app/components/scheduler/scheduler.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  collapse: boolean = true

  constructor(private service:SchedulerService,private router:Router){}

  ngOnInit(): void {
    this.router.events.pipe(
      // Filter for NavigationEnd events
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      let url =  event.url.substring(1)
      // console.log('Current URL:', event.url);
      if(url === 'login'){
        this.collapse = false
      }else{
        this.collapse = true
      }
    });
  }

  items: any[] = [
    {
      label: 'CarPark',
      icon: 'pi pi-home pi-external-link',
      url: 'carParks'
    },
    {
      label: 'Facility',
      icon: 'pi pi-search pi-external-link',
      url: 'facilities'
    },
    {
      label: 'Counter',
      icon: 'pi pi-fw pi-external-link',
      url: 'counters'
    },
    {
      label: 'Contingent',
      icon: 'pi pi-fw pi-external-link',
      url: 'contingents'
    },
    {
      label: 'Job',
      icon: 'pi pi-fw pi-external-link',
      url: 'jobs'
    },
  ];

}
