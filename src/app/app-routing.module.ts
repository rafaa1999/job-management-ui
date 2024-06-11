import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarParkComponent } from './components/car-park/car-park.component';
import { FacilityComponent } from './components/facility/facility.component';
import { CounterComponent } from './components/counter/counter.component';
import { ContingentComponent } from './components/contingent/contingent.component';
import { JobComponent } from './components/job/job.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { StatisticsComponent } from './shared/components/statistics/statistics.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'carParks', component: CarParkComponent },
  { path: 'facilities/car-park/:id', component: FacilityComponent },
  { path: 'counters/facility/:id', component: CounterComponent },
  { path: 'contingents/counter/:id', component: ContingentComponent },
  { path: 'contingents', component: ContingentComponent },
  { path: 'jobs/:id', component: JobComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'jobDetails/:jobName', component: JobDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
