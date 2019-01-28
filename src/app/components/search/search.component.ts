import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StandardSite } from 'src/app/models/standard-site';
import { StandardRole } from 'src/app/models/standard-role';
import { EasMediaData } from 'src/app/models/eas-media-data';
import { StandardClassification } from 'src/app/models/standard-classification';
import { ToastrService } from 'ngx-toastr';
import { GridComponent } from '../grid/grid.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  providers: [GridComponent]
})
export class SearchComponent implements OnInit {
  startDate: any;
  endDate: any;
  @Output() searchData: EventEmitter<any> = new EventEmitter<any>();
  stndSite: StandardSite = {
    id: null,
    descriptionTx: null,
    endTs: null,
    lastModifiedTs: null,
    lastModifiedUserId: null,
    nm: null,
    notificationThreshold: null,
    startTs: null
  };
  stndRole: StandardRole = {
    id: null,
    descriptionTx: null,
    endTs: null,
    lastModifiedTs: null,
    lastModifiedUserId: null,
    nm: null,
    startTs: null
  };
  standardClassification: StandardClassification = {
    id: null,
    descriptionTx: null,
    endTs: null,
    lastModifiedTs: null,
    lastModifiedUserId: null,
    nm: null,
    notificationThreshold: null,
    startTs: null
  }
  easMediaData: EasMediaData = {
    id: null,
    channelName: null,
    standardClassification: this.standardClassification,
    encodingFormat: null,
    lastModifiedTs: null,
    lastModifiedUserId: null,
    mediaOriginatedIp: null,
    mediaOriginatedPort: null,
    enableIn: "",
    stndSite: this.stndSite,
    stndRole: this.stndRole
  };
  siteIdList: StandardSite[];
  roleIdList: StandardRole[];
  classificationList: StandardClassification[];

  constructor(private dataService: DataService,private sharedService: SharedService, private toastr: ToastrService, private gridComponent: GridComponent) {

  }

  submitSearch() {

    let queryParams: any = [];
    let queryString: string;
    let searchUrl: string;
    let validDate: boolean = true;

    if (this.easMediaData.channelName !== 'undefined' && this.easMediaData.channelName !== null && this.easMediaData.channelName !== '') {
      queryParams.push('channelName=' + this.easMediaData.channelName);
    }
    if (this.easMediaData.stndSite.id) {
      queryParams.push('standardSiteId=' + this.easMediaData.stndSite.id);
    }
    if (this.easMediaData.mediaOriginatedIp !== 'undefined' && this.easMediaData.mediaOriginatedIp !== null && this.easMediaData.mediaOriginatedIp !== '') {
      queryParams.push('mediaOriginatedIp=' + this.easMediaData.mediaOriginatedIp);
    }
    if (this.easMediaData.mediaOriginatedPort) {
      queryParams.push('mediaOriginatedPort=' + this.easMediaData.mediaOriginatedPort);
    }
    if (this.easMediaData.standardClassification.id) {
      queryParams.push('standardClsfId=' + this.easMediaData.standardClassification.id);
    }
    if (this.easMediaData.stndRole.id) {
      queryParams.push('standardRoleId=' + this.easMediaData.stndRole.id);
    }
    if (this.easMediaData.enableIn !== 'undefined' && this.easMediaData.enableIn !== null && this.easMediaData.enableIn !== '') {
      queryParams.push('enableIn=' + this.easMediaData.enableIn);
    }
    if (new Date(this.startDate).getTime() > new Date(this.endDate).getTime()) {
      validDate = false;
      this.toastr.error('Start date cannot be greater than end date', '', {
        timeOut: 10000
      });
    }
    if ((new Date(this.startDate).getTime() && !new Date(this.endDate).getTime()) || (!new Date(this.startDate).getTime() && new Date(this.endDate).getTime())) {
      validDate = false;
      this.toastr.error('Both start date and end date have to be populated', '', {
        timeOut: 10000
      });
    }
    if (new Date(this.startDate).getTime() && new Date(this.endDate).getTime() && validDate) {
      queryParams.push('startDate=' + new Date(this.startDate).getTime());
      queryParams.push('endDate=' + new Date(this.endDate).getTime());
    }
    for (var i = 0; i < queryParams.length; i++) {
      if (i >= 1) {
        queryString += '&' + queryParams[i];
      } else {
        queryString = queryParams[i];
      }
    }

    //searchUrl = 'http://localhost:8080/eas-media-data?' + queryString;


    if (validDate) {
      this.dataService.getSearchData(queryString)
        .subscribe(rowData => {
          console.log('Table response: %o', rowData);
          this.searchData.emit(rowData);
          this.toastr.success('Successfully returned ' + rowData.length + ' rows', '', {
            timeOut: 10000
          });
        });
    }

  };

  clearSearch() {
    this.easMediaData.channelName = null;
    this.easMediaData.stndSite.id = null;
    this.easMediaData.mediaOriginatedIp = null;
    this.easMediaData.mediaOriginatedPort = null;
    this.stndRole.id = null;
    this.easMediaData.enableIn = "";
    this.startDate = '';
    this.endDate = '';
    this.dataService.getChannelList()
      .subscribe(
        channelList => {
          this.searchData.emit(channelList);
        })
  };


  ngOnInit() {
    this.sharedService.sharedSiteIdDataSource.subscribe(data => this.siteIdList = data);
    this.sharedService.sharedRoleIdDataSource.subscribe(data => this.roleIdList = data);
    this.sharedService.sharedClassDataSource.subscribe(data => this.classificationList = data);
   
    this.dataService.getSiteIdList().subscribe(siteIdList => {
      this.siteIdList = siteIdList;
    });

    this.dataService.getRoleIdList().subscribe(roleIdList => {
      this.roleIdList = roleIdList;
    });

    this.dataService.getClassificationList().subscribe(classificationList => {
      this.classificationList = classificationList;
    });

  }

}
