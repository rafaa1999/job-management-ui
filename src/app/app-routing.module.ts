  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { CarParkComponent } from './components/car-park/car-park.component';
  import { FacilityComponent } from './components/facility/facility.component';
  import { CounterComponent } from './components/counter/counter.component';
  import { ContingentComponent } from './components/contingent/contingent.component';
  import { JobComponent } from './components/job/job.component';

  const routes: Routes = [
    {path:"carParks", component:CarParkComponent},
    {path:"facilities/car-park/:id", component:FacilityComponent },
    {path:"counters/facility/:id", component:CounterComponent },
    {path:"contingents/counter/:id", component:ContingentComponent },
    {path:"jobs", component:JobComponent },
    {path:"**", redirectTo:"carParks", pathMatch:"full"}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


