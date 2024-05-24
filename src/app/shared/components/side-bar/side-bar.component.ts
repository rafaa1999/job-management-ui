import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

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
