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

  toastrTimeOut: number = 10000;

  keyCodeList: number[] = [8, 9, 13, 16, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];

  ipOctetOne: any;
  ipOctetTwo: any;
  ipOctetThree: any;
  ipOctetFour: any;
  TRUE: string = "TRUE";
  FALSE: string = "FALSE";


  constructor(private dataService: DataService, private sharedService: SharedService, private toastr: ToastrService, private gridComponent: GridComponent) {

  }

  submitSearch() {

    let queryParams: any = [];
    let queryString: string;
    let searchUrl: string;
    let validDate: boolean = true;
    let validIP: boolean = true;
    this.easMediaData.mediaOriginatedIp = null;


    // First Octet
    if (this.ipOctetOne) {
      this.easMediaData.mediaOriginatedIp = this.ipOctetOne;
    } else {
      validIP = false;
    }

    // Second Octet
    if (validIP) {
      if (this.ipOctetTwo) {
        this.easMediaData.mediaOriginatedIp = this.easMediaData.mediaOriginatedIp + "." + this.ipOctetTwo;
      }
    }

    // Third Octet
    if (validIP) {
      if (this.ipOctetThree) {
        if (this.ipOctetTwo) {
          this.easMediaData.mediaOriginatedIp = this.easMediaData.mediaOriginatedIp + "." + this.ipOctetThree;
        } else {
          validIP = false;
        }
      }
    }

    // Fourth Octet
    if (validIP) {
      if (this.ipOctetFour) {
        if (this.ipOctetThree) {
          this.easMediaData.mediaOriginatedIp = this.easMediaData.mediaOriginatedIp + "." + this.ipOctetFour;
        } else {
          validIP = false;
        }
      }
    }

    if (!validIP) {

      this.toastr.error('Please enter the IP address sequentially. There cannot be blanks between octets', '', {
        timeOut: 10000
      });
    }

    if (this.easMediaData.channelName !== 'undefined' && this.easMediaData.channelName !== null && this.easMediaData.channelName !== '') {
      queryParams.push('channelName=' + this.easMediaData.channelName);
    }
    if (this.easMediaData.stndSite.id && this.easMediaData.stndSite.id !== -1) {
      queryParams.push('standardSiteId=' + this.easMediaData.stndSite.id);
    }
    if (this.easMediaData.mediaOriginatedIp !== 'undefined' && this.easMediaData.mediaOriginatedIp !== null && this.easMediaData.mediaOriginatedIp !== '') {
      queryParams.push('mediaOriginatedIp=' + this.easMediaData.mediaOriginatedIp);
    }
    if (this.easMediaData.mediaOriginatedPort) {
      queryParams.push('mediaOriginatedPort=' + this.easMediaData.mediaOriginatedPort);
    }
    if (this.easMediaData.standardClassification.id && this.easMediaData.standardClassification.id !== -1) {
      queryParams.push('standardClsfId=' + this.easMediaData.standardClassification.id);
    }
    if (this.easMediaData.stndRole.id && this.easMediaData.stndRole.id !== -1) {
      queryParams.push('standardRoleId=' + this.easMediaData.stndRole.id);
    }
    if (this.easMediaData.enableIn !== 'undefined' && this.easMediaData.enableIn !== null && this.easMediaData.enableIn !== '' && this.easMediaData.enableIn !== 'default') {
      queryParams.push('enableIn=' + this.easMediaData.enableIn);
    }
    if (new Date(this.startDate).getTime() > new Date(this.endDate).getTime()) {
      validDate = false;
      this.toastr.error('Begin date cannot be greater than End date', '', {
        timeOut: 10000
      });
    }
    if ((new Date(this.startDate).getTime() && !new Date(this.endDate).getTime()) || (!new Date(this.startDate).getTime() && new Date(this.endDate).getTime())) {
      validDate = false;
      this.toastr.error('Both Begin date and End date have to be populated', '', {
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


    if (validDate && validIP) {
      this.dataService.getSearchData(queryString)
        .subscribe(rowData => {
          console.log('Table response: %o', rowData);
          this.searchData.emit(rowData);
          this.sharedService.setSearchFlag(false);
          this.sharedService.changeDataSource(rowData);
          this.toastr.success('Successfully returned ' + rowData.length + ' rows', '', {
            timeOut: 10000
          });
          this.clearSearch();
        });
    }

  };

  clearSearch() {
    this.easMediaData.channelName = null;
    this.easMediaData.stndSite.id = -1;
    this.easMediaData.mediaOriginatedIp = null;
    this.ipOctetOne = null;
    this.ipOctetTwo = null;
    this.ipOctetThree = null;
    this.ipOctetFour = null;
    this.easMediaData.mediaOriginatedPort = null;
    this.stndRole.id = -1;
    this.easMediaData.standardClassification.id = -1;
    this.easMediaData.enableIn = "default";
    this.startDate = '';
    this.endDate = '';
    this.dataService.getChannelList()
      .subscribe(
        channelList => {
          this.searchData.emit(channelList);
        })
  };



  checkIpValue(fromTextBox, toTextBox, e, modelName) {
    // if (e.keyCode < 48 || e.keyCode > 57 && e.keyCode !== 9) {
    if (!this.keyCodeList.includes(e.keyCode)) {
      switch (modelName) {
        case "ipOctetOne":
          this.ipOctetOne = this.ipOctetOne.substring(0, this.ipOctetOne.length - 1);;
          break;
        case "ipOctetTwo":
          this.ipOctetTwo = this.ipOctetTwo.substring(0, this.ipOctetTwo.length - 1);;
          break;
        case "ipOctetThree":
          this.ipOctetThree = this.ipOctetThree.substring(0, this.ipOctetThree.length - 1);;
          break;
        case "ipOctetFour":
          this.ipOctetFour = this.ipOctetFour.substring(0, this.ipOctetFour.length - 1);;
          break;
        default:
          break;
      }
    }
    // var length = fromTextBox.length;
    // if (length === 3) {
    //   document.getElementById(toTextBox).focus();
    // }
  }




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

    this.clearSearch();

  }

}
