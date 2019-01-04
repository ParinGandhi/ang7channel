import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   sharedDataSource = new BehaviorSubject([]);
  currentMessage = this.sharedDataSource.asObservable();
  constructor() { }
  changeDataSource(data:any){
    this.sharedDataSource.next(data);
  }
}
