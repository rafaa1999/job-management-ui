import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SplitterModule } from 'primeng/splitter';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CarParkComponent } from './components/car-park/car-park.component';
import { FacilityComponent } from './components/facility/facility.component';
import { CounterComponent } from './components/counter/counter.component';
import { ContingentComponent } from './components/contingent/contingent.component';
import { JobComponent } from './components/job/job.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BadgeModule } from 'primeng/badge';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { KnobModule } from 'primeng/knob';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';


import { MessageService } from 'primeng/api';  // Import MessageService
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { StatisticsComponent } from './shared/components/statistics/statistics.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

import {TranslateLoader,TranslateModule} from "@ngx-translate/core"
import {TranslateHttpLoader} from "@ngx-translate/http-loader"
import { CoreModule } from './core/core.module';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json')
}


@NgModule({
  declarations: [
    AppComponent,
    CarParkComponent,
    FacilityComponent,
    CounterComponent,
    ContingentComponent,
    JobComponent,
    HeaderComponent,
    SideBarComponent,
    SchedulerComponent,
    LoginComponent,
    DashboardComponent,
    StatisticsComponent,
    JobDetailsComponent,
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastModule,
    CoreModule,
    MessagesModule,
    ChartModule,
    MessageModule,
    CheckboxModule,
    InputNumberModule,
    CalendarModule,
    ReactiveFormsModule,
    BrowserModule,
    InputTextareaModule,
    KnobModule,
    DialogModule,
    SplitButtonModule,
    BadgeModule,
    AccordionModule,
    CardModule,
    TagModule,
    AppRoutingModule,
    MenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    ConfirmPopupModule,
    FormsModule,
    TableModule,
    FieldsetModule,
    RouterModule,
    PanelModule,
    InputSwitchModule,
    SplitterModule,
    BreadcrumbModule,
    RadioButtonModule,
    DropdownModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    MessageService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
