import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   sharedDataSource = new BehaviorSubject([]);
   sharedLoginResource = new BehaviorSubject(false);
  currentMessage = this.sharedDataSource.asObservable();
  currentLogin = this.sharedLoginResource.asObservable();
  constructor() { }
  changeDataSource(data:any){
    this.sharedDataSource.next(data);
  }
  changeLoginSource(data:boolean){
    this.sharedLoginResource.next(data);
  }
}
