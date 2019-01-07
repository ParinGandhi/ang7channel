import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
  
})
export class ViewComponent implements OnInit {
  recievedObj: any;
  constructor() { }

  ngOnInit() {
  }
  @ViewChild(SearchComponent) child;
  public setSearchData(rObj: any){
    this.recievedObj = rObj;
  }

}
