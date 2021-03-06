import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { routeReuseStrategy } from './routeReuse';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { GridComponent } from './components/grid/grid.component';
import { WaveformComponent } from './components/waveform/waveform.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NvD3Module } from "ng2-nvd3";
import { CustomRouterLink } from "./custom-router";
import 'd3';
import 'nvd3';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DataService } from './services/data.service';
import { ViewComponent } from './components/view/view.component';
import { HistoryComponent } from './components/history/history.component';
import { PlayAudioComponent } from './components/play-audio/play-audio.component';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { PlayComponent } from './components/play/play.component';



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
    PlayAudioComponent,
    PlayComponent,
    CustomRouterLink
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    SidebarModule,
    SelectDropDownModule,
    AngularDateTimePickerModule,
    NvD3Module,
    NgxSpinnerModule,
    NgxCleaveDirectiveModule,
    AgGridModule.withComponents([HistoryComponent, PlayAudioComponent, PlayComponent]),
    NgxSmartModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: DataService, useClass: DataService }, { provide: RouteReuseStrategy, useClass: routeReuseStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
