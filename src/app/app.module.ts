import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { JobComponent } from './ui/job/job.component'; 
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SplitterModule } from 'primeng/splitter';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CreateCronjobComponent } from './ui/create-cronjob/create-cronjob.component';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CarparkComponent } from './ui/carpark/carpark.component';
import { CarParkComponent } from './ui/car-park/car-park.component';
import { FacilityComponent } from './ui/facility/facility.component';
import { CounterComponent } from './ui/counter/counter.component';
import { ContingentComponent } from './ui/contingent/contingent.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    CreateCronjobComponent,
    CarparkComponent,
    CarParkComponent,
    FacilityComponent,
    CounterComponent,
    ContingentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    TableModule,
    FieldsetModule,
    PanelModule,
    InputSwitchModule,
    SplitterModule,
    RadioButtonModule,
    DropdownModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
