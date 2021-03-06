import { Component, OnInit, NgZone, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { EasMediaData } from 'src/app/models/eas-media-data';
import { HistoryComponent } from '../history/history.component';
import { PlayAudioComponent } from '../play-audio/play-audio.component';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { GridOptions, GridCellDef } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared.service';
import { SearchComponent } from '../search/search.component';
import { formatDate } from '@angular/common';
// import sampleJson from './sampleJson.json';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})
export class GridComponent implements OnInit {
  gridOptions: GridOptions;
  historyGridOptions: GridOptions;
  rowData: EasMediaData[];
  loggedIn: boolean = false;
  historyRowData: EasMediaData[];
  rowSelection: string = "multiple";
  lastRefreshed: any;
  showPlayer: boolean = false;
  channelName: String[] = [];
  url: string = "assets/sample.wav";
  frameworkComponents: Object;
  recievedObj: any;
  newGridData: any;
  @Input('receivedOb') recObj: any;
  display: boolean = false;
  gridRefreshInterval: number = 1;
  gridInterval: any;
  guestUser: boolean;
  channelNameForExport: string;
  refreshIntervals: {}[] = [
    {
      description: "1 minute",
      value: 60000
    },
    {
      description: "5 minutes",
      value: 300000
    },
    {
      description: "30 minutes",
      value: 1800000
    },
    {
      description: "1 hour",
      value: 3600000
    },
    {
      description: "Cancel auto refresh",
      value: 9999999
    }
  ];

  constructor(private dataService: DataService, private sharedService: SharedService, private cdref: ChangeDetectorRef, public ngxSmartModalService: NgxSmartModalService, private zone: NgZone, private toastr: ToastrService) {
    // this.frameworkComponents = {
    //   historyComponent: HistoryComponent
    // };


  }


  enabledRenderer = function (params) {
    var result;
    if (params.value === "TRUE") {
      result = "Yes"
    } else if (params.value === "FALSE") {
      result = "No"
    }
    return "<span>" + result + "</span>";
  }


  columnDefs = [
    { headerCheckboxSelection: true, checkboxSelection: true, width: 40 },
    // {
    //   headerName: 'Play', cellRendererFramework: PlayAudioComponent, cellRendererParams: {
    //     onClick: this.sample.bind(this),
    //     label: 'Click 1'
    //   }, width: 75
    // },
    {
      headerName: 'Channel Name', field: 'channelName', cellRendererFramework: PlayAudioComponent, cellRendererParams: {
        onClick: this.sample.bind(this)
      },
      width: 200
    },
    { headerName: 'Site ID', field: 'stndSite.nm' },
    { headerName: 'Classification', field: 'standardClassification.nm' },
    { headerName: 'Role ID', field: 'stndRole.nm' },
    { headerName: "Originated IP", field: "mediaOriginatedIp", hide: true },
    { headerName: "Originated Port", field: "mediaOriginatedPort", hide: true },
    { headerName: "Enabled", field: "enableIn", cellRenderer: this.enabledRenderer },
    {
      headerName: 'History', cellRendererFramework: HistoryComponent, cellRendererParams: {
        onClick: this.getHistory.bind(this),
        label: 'Click 1',
        width: 75
      },
    }
  ];



  getHistory(e) {
    this.channelNameForExport = e.rowData.channelName;
    this.dataService.getHistoryData(e.rowData.id)
      .subscribe(
        response => {
          // this.ngxSmartModalService.setModalData(response, 'historyModal');
          this.historyRowData = response;
          // this.historyRowData = sampleJson;
          this.ngxSmartModalService.getModal('historyModal').open();
        },
        error => {
          console.log(error);
          // this.openHistoryModal(error, e, false) 
        }
      );
  };

  historyColumnDefs = [
    { headerName: 'Channel Name', field: 'channelName', width: 200 },
    { headerName: 'Site ID', field: 'stndSiteDescriptionTx', width: 200 },
    { headerName: "Originated IP", field: "mediaOriginatedIp", width: 200 },
    { headerName: "Originated Port", field: "mediaOriginatedPort", width: 200 },
    { headerName: 'Classification', field: 'classification', width: 200 },
    { headerName: 'Role ID', field: 'stndRoleDescriptionTx', width: 200 },
    { headerName: 'Last modified user', field: 'lastModifiedUserId', width: 200 },
    {
      headerName: 'Action', field: 'actionTaken', cellRenderer: (data) => {
        if (data.value === 'H') {
          return "History"
        } else if (data.value === 'A') {
          return "Archived"
        } else {
          return "";
        }
      }
    },
    {
      headerName: 'Last modified time', type: 'date', field: 'lastModifiedTs', cellRenderer: (data) => {
        return data.value ? (new Date(data.value)).toLocaleDateString() + ' ' + (new Date(data.value)).toLocaleTimeString() : '';
      }
    }

  ];

  exportToCsv() {
    var params = {
      columnKeys: ["channelName", "stndSite.nm", "mediaOriginatedIp", "mediaOriginatedPort", "standardClassification.nm", "stndRole.nm", "enableIn"],
      fileName: 'AudioExport.csv',
      suppressQuotes: true,
      processHeaderCallback: function (params) {
        console.clear();
        console.log(params);
        console.log(params.column.getColDef().headerName);
        if (params.column.getColDef().field === "channelName") {
          return "Channel Name";
        } else {
          return params.column.getColDef().headerName;
        }

        // return params.column.getColDef().headerName.toUpperCase();
      },
      processCellCallback: function (params) {
        if (params.column.getColDef().field === "enableIn") {
          if (params.value === "TRUE") {
            return "Yes"
          } else if (params.value === "FALSE") {
            return "No"
          }
        } else {
          return params.value;
        }
      }
    };
    this.gridOptions.api.exportDataAsCsv(params);
    var event = {
      category: "Success",
      name: window.sessionStorage.getItem("user-id"),
      descriptionText: "Export recordings",
      eventResponse: 'Export of channel list',
      eventType: "Export",
      startTs: new Date(),
      lastModifiedUserId: window.sessionStorage.getItem("user-id"),
      lastModifiedTs: new Date()

    }
    this.dataService.createEvent(event)
      .subscribe(successResponse => {
        this.sharedService.changeDashboardData(true);
        console.log(successResponse);
      })
  };

  exportHistoryToCsv() {
    var params = {
      columnKeys: ["channelName", "stndSiteDescriptionTx", "mediaOriginatedIp", "mediaOriginatedPort", "classification", "stndRoleDescriptionTx", "actionTaken", "lastModifiedUserId", "lastModifiedTs"],
      fileName: 'AudioHistoryExport-' + this.channelNameForExport + '.csv',
      suppressQuotes: true,
      processCellCallback: function (params) {
        if (params.column.getColDef().field === "lastModifiedTs") {
          var lastModTsExport = " " + formatDate(new Date(params.value), "M/d/yyyy h:mm:ss a", "en-US");
          // var lastModTsExport = " " + formatDate(new Date(params.value).getTime(), "short", "en-US");
          console.log(lastModTsExport);
          console.log(lastModTsExport.toString());
          return lastModTsExport.toString();
        } else if (params.column.getColDef().field === "actionTaken") {
          if (params.value === "H") {
            return "History";
          } else if (params.value === "A") {
            return "Archived";
          } else {
            return "";
          }
        } else {
          return params.value;
        }
      }
    };
    this.historyGridOptions.api.exportDataAsCsv(params);
    var event = {
      category: "Success",
      name: window.sessionStorage.getItem("user-id"),
      descriptionText: "Export channel",
      eventResponse: 'Export for channel: ' + this.channelNameForExport,
      eventType: "Export",
      startTs: new Date(),
      lastModifiedUserId: window.sessionStorage.getItem("user-id"),
      lastModifiedTs: new Date()

    }
    this.dataService.createEvent(event)
      .subscribe(successResponse => {
        this.sharedService.changeDashboardData(true);
        console.log(successResponse);
      })
  };

  archiveChannels() {
    let selectedRows = this.gridOptions.api.getSelectedRows();
    let channelList = [];
    for (var i = 0; i < selectedRows.length; i++) {
      channelList.push(selectedRows[i].channelName);
    }
    console.log(channelList);
    if (channelList.length > 0) {
      this.dataService.archiveChannels(channelList).subscribe(channel => {
        console.log(channel);
        this.toastr.success('Successfully archived selected channels', '', {
          timeOut: 10000
        });
      });
    } else {
      this.toastr.error('Please select at least one channel to archive', '', {
        timeOut: 10000
      });
    }
  };


  sample(rowData) {
    this.channelName.push(rowData.rowData.channelName);
    this.channelName = this.channelName.slice();
    this.showPlayer = true;

  };
  getSearchResults(data) {
    this.rowData = data;
  }
  ngOnChanges() {
    this.rowData = this.recObj;
  }
  getGridData() {
    this.dataService.getChannelList().subscribe(rowData => {
      this.lastRefreshed = new Date();
      this.rowData = rowData;
      this.showPlayer = false;
      //this.sharedService.isDashboardSearch.next(false);
      this.toastr.success('', 'Retrieved ' + rowData.length + ' records', {
        timeOut: 10000
      });
    });
  }
  setSearchFlag() {
    this.sharedService.setSearchFlag(true);
  }
  ngOnInit() {
    this.sharedService.sharedDataSource.subscribe(data => {
      this.rowData = data;
      this.showPlayer = false;
    });
    this.sharedService.currentFlag.subscribe(data => this.display = data);
    this.sharedService.sharedLoginResource.subscribe(data => {
      this.loggedIn = data;
      console.log(data);
    })
    this.sharedService.dashboardSearch.subscribe(data => {
      if (!data) {
        this.getGridData();
      }
    })
    this.sharedService.currentGuestUser.subscribe(data => {
      this.guestUser = data;
    })


    this.gridOptions = <GridOptions>{
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      rowHeight: 35
    };

    this.historyGridOptions = <GridOptions>{
      onGridReady: () => {
        this.historyGridOptions.api.sizeColumnsToFit();
      },
      rowHeight: 35
    };

  }


  // setRefreshInterval(gridRefreshInterval) {
  //   this.gridInterval = setInterval(() => {
  //     this.getGridData();
  //   }, gridRefreshInterval.value);
  //   if (gridRefreshInterval.value !== 9999999) {
  //     this.toastr.success('Successfully set auto refresh to ' + gridRefreshInterval.description, '', {
  //       timeOut: 10000
  //     });
  //   } else {
  //     this.toastr.success('Successfully cancelled auto refresh.', '', {
  //       timeOut: 10000
  //     });
  //     clearInterval(this.gridInterval);
  //   }

  // }

  // @ViewChild(SearchComponent) child;
  // public setSearchData(rObj: any) {
  //   this.recievedObj = rObj;
  // }

}
