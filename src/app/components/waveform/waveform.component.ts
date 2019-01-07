import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import WaveSurfer from '../../../../node_modules/wavesurfer.js';
import Timeline from '../../../../node_modules/wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
import { DataService } from 'src/app/services/data.service';
import { GridOptions, GridCellDef } from 'ag-grid-community';
import { ChannelData } from '../../models/channel-data';

@Component({
  selector: 'app-waveform',
  templateUrl: './waveform.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaveformComponent implements OnInit {
  isWavformExist: boolean = false;
  waveSurfer: any;
  isPlayAudio = false;
  showPlayer: boolean = false;
  waveformData: ChannelData[];
  channelName: string;
  waveFormGridOptions: GridOptions;
  gridDefined: boolean = false;
  da:any;
startDate:any;
endDate:any;
  @Input() metaDataChannelName: string[];
  constructor(private cdref: ChangeDetectorRef, private dataService: DataService) { }

  ngOnInit() {

    // this.waveFormGridOptions = <GridOptions>{
    //   onGridReady: () => {
    //     this.waveFormGridOptions.api.sizeColumnsToFit();
    //   },
    //   rowHeight: 35
    // };
    //this.getChannelData(this.metaDataChannelName[this.metaDataChannelName.length-1])
  }
  ngOnChanges() {
    //this.constructWaveSurfer(this.metaDataUrl);
    if (!this.gridDefined){
      this.waveFormGridOptions = <GridOptions>{
        onGridReady: () => {
          this.waveFormGridOptions.api.sizeColumnsToFit();
        },
        rowHeight: 35
      };
      this.gridDefined = true;
    }
    this.getChannelData(this.metaDataChannelName[this.metaDataChannelName.length - 1])
  }
  constructWaveSurfer(url) {
    this.isPlayAudio = true;
    if (!this.isWavformExist) {
      this.waveSurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#337ab7',
        plugins: [
          Timeline.create({
            container: '#waveform-timeline'
          })
        ]

      });
      this.isWavformExist = true;
    }
    if (url != undefined) {
      this.showPlayer = true;
      this.waveSurfer.load(url[0]);

      this.waveSurfer.on('ready', () => {
        this.waveSurfer.play();
      });
    }


  }
  waveformColumnDefs = [
    { headerName: 'Channel Name', field: 'channelName', width: 200 },
    { headerName: 'Initialized time', field: 'initializedTime', width: 200,cellRenderer: (data) => {
      return data.value ? (new Date(data.value * 1000)).toLocaleDateString() +" "+ new Date(data.value * 1000).toLocaleTimeString(): '';
 }  },
    { headerName: "Start time", field: "startTime", width: 200,cellRenderer: (data) => {
      return data.value ? (new Date(data.value * 1000)).toLocaleDateString() +" "+ new Date(data.value * 1000).toLocaleTimeString(): '';
 }  },
    { headerName: "End time", field: "endTime", width: 200 ,cellRenderer: (data) => {
      return data.value ? (new Date(data.value * 1000)).toLocaleDateString() +" "+ new Date(data.value * 1000).toLocaleTimeString(): '';
 } }

  ];
  getChannelData(channelName) {

    this.dataService.getDataByChannelName(channelName)
      .subscribe(
        response => {
          // this.ngxSmartModalService.setModalData(response, 'historyModal');
          //this.waveformData =response;
          this.waveFormGridOptions.api.setRowData(response);
        },
        error => {
          console.log(error);
          // this.openHistoryModal(error, e, false) 
        }
      );
  };


}
