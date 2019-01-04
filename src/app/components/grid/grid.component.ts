import { Component, OnInit, NgZone, Input, ChangeDetectorRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { EasMediaData } from 'src/app/models/eas-media-data';
import { HistoryComponent } from '../history/history.component';
import { PlayAudioComponent } from '../play-audio/play-audio.component';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { GridOptions, GridCellDef } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})
export class GridComponent implements OnInit {
  gridOptions: GridOptions;
  historyGridOptions: GridOptions;
  rowData: EasMediaData[];
  historyRowData: EasMediaData[];
  rowSelection: string = "multiple";
  lastRefreshed: any;
  showPlayer: boolean = false;
  audioUrl: String[] = [];
  url: string = "assets/sample.wav";
  frameworkComponents: Object;
  recievedObj: any;
  newGridData: any;
  @Input('receivedOb') recObj: any;

  constructor(private dataService: DataService, private sharedService: SharedService, private cdref: ChangeDetectorRef, public ngxSmartModalService: NgxSmartModalService, private zone: NgZone, private toastr: ToastrService) {
    // this.frameworkComponents = {
    //   historyComponent: HistoryComponent
    // };


  }



  columnDefs = [
    { headerName: 'Archve', checkboxSelection: true, width: 80 },
    {
      headerName: 'Play', cellRendererFramework: PlayAudioComponent, cellRendererParams: {
        onClick: this.sample.bind(this),
        label: 'Click 1'
      }, width: 75
    },
    { headerName: 'Channel Name', field: 'channelName' },
    { headerName: 'Site ID', field: 'stndSite.nm' },
    { headerName: 'Classification', field: 'standardClassification.nm' },
    { headerName: 'Role ID', field: 'stndRole.nm' },
    {
      headerName: 'History', cellRendererFramework: HistoryComponent, cellRendererParams: {
        onClick: this.getHistory.bind(this),
        label: 'Click 1',
        width: 75
      },
    }
  ];

  getHistory(e) {
    this.dataService.getHistoryData(e.rowData.id)
      .subscribe(
        response => {
          // this.ngxSmartModalService.setModalData(response, 'historyModal');
          this.historyRowData = response;
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
      headerName: 'Last modified time', field: 'lastModifiedTs', cellRenderer: (data) => {
        return data.value ? (new Date(data.value)).toLocaleDateString() + ' ' + (new Date(data.value)).toLocaleTimeString() : '';
      }
    }

  ];

  exportToCsv() {
    var params = {
      columnKeys: ["channelName", "stndSite.descriptionTx", "mediaOriginatedIp", "mediaOriginatedPort", "classification", "stndRole.descriptionTx"],
      fileName: 'AudioExport.csv'
    };
    this.gridOptions.api.exportDataAsCsv(params);
  };

  exportHistoryToCsv() {
    var params = {
      columnKeys: ["channelName", "stndSite.descriptionTx", "mediaOriginatedIp", "mediaOriginatedPort", "classification", "stndRole.descriptionTx"],
      fileName: 'AudioHitoryExport.csv'
    };
    this.historyGridOptions.api.exportDataAsCsv(params);
  };

  archiveChannels() {
    let selectedRows = this.gridOptions.api.getSelectedRows();
    let channelList = [];
    for (var i = 0; i < selectedRows.length; i++) {
      channelList.push(selectedRows[i].channelName);
    }
    console.log(channelList);
    this.dataService.archiveChannels(channelList).subscribe(channel => {
      console.log(channel);
    });
  };


  sample() {
    this.audioUrl.push(this.url);
    this.audioUrl = this.audioUrl.slice();
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
      this.toastr.success('', 'Retrieved ' + rowData.length + ' records', {
        timeOut: 10000
      });
    });
  }
  ngOnInit() {
    this.sharedService.sharedDataSource.subscribe(data => this.rowData = data)
    this.getGridData();


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

}
