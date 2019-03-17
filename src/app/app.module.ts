import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { GridComponent } from './components/grid/grid.component';
import { WaveformComponent } from './components/waveform/waveform.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NvD3Module } from "ng2-nvd3";
import 'd3';
import 'nvd3';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DataService } from './services/data.service';
import { ViewComponent } from './components/view/view.component';
import { HistoryComponent } from './components/history/history.component';
import { PlayAudioComponent } from './components/play-audio/play-audio.component';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectDropDownModule } from 'ngx-select-dropdown'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    GridComponent,
    WaveformComponent,
    DashboardComponent,
    ViewComponent,
    HistoryComponent,
    PlayAudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    SelectDropDownModule,
    AngularDateTimePickerModule,
    NvD3Module,
    NgxSpinnerModule,
    AgGridModule.withComponents([HistoryComponent, PlayAudioComponent]),
    NgxSmartModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
