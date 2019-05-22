import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedDataSource = new BehaviorSubject([]);
  sharedSiteIdDataSource = new BehaviorSubject([]);
  sharedRoleIdDataSource = new BehaviorSubject([]);
  sharedClassDataSource = new BehaviorSubject([]);
  isDashboardSearch = new BehaviorSubject(false);
  searchFlag = new BehaviorSubject(false);
  changeDashboardDataSource = new BehaviorSubject(false);
  sharedLoginResource = new BehaviorSubject(false);
  currentMessage = this.sharedDataSource.asObservable();
  currentLogin = this.sharedLoginResource.asObservable();
  currentSitId = this.sharedSiteIdDataSource.asObservable();
  currentRoleId = this.sharedRoleIdDataSource.asObservable();
  currentClassData = this.sharedClassDataSource.asObservable();
  currentFlag = this.searchFlag.asObservable();
  dashboardSearch = this.isDashboardSearch.asObservable();

  constructor() { }
  changeDataSource(data: any) {
    this.sharedDataSource.next(data);
  }
  changeLoginSource(data: boolean) {
    this.sharedLoginResource.next(data);
  }
  changeSiteIdData(data: any) {
    this.sharedSiteIdDataSource.next(data);
  }
  setDashboardSearch(data:any){
    this.isDashboardSearch.next(data);
  }
  changeDashboardData(data: boolean) {
    this.changeDashboardDataSource.next(data);
  }
  changeRoleIdData(data: any) {
    this.sharedRoleIdDataSource.next(data);
  }
  changeClassData(data: any) {
    this.sharedClassDataSource.next(data);
  }
  setSearchFlag(data: any) {
    this.searchFlag.next(data);
  }
}
