import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'

})
export class ViewComponent implements OnInit {
  recievedObj: any;
  constructor(private sharedService: SharedService) { }
  isLoggedIn: boolean = false;
  ngOnInit() {
    this.sharedService.sharedLoginResource.subscribe(data => this.isLoggedIn = data)
    if (this.isLoggedIn) {

    } else {
      setTimeout(() => {
        document.getElementById('login').click();
      }, 500)
    }
  }
  // @ViewChild(SearchComponent) child;
  // public setSearchData(rObj: any) {
  //   this.recievedObj = rObj;
  // }

}
