import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import WaveSurfer from '../../../../node_modules/wavesurfer.js';
import Timeline from '../../../../node_modules/wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
import { DataService } from 'src/app/services/data.service';
import { GridOptions, GridCellDef } from 'ag-grid-community';
import { ChannelData } from '../../models/channel-data';
import { AudioInputs } from '../../models/audio-Inputs';
import { ToastrService, Toast } from 'ngx-toastr';

@Component({
  selector: 'app-waveform',
  templateUrl: './waveform.component.html'
})
export class WaveformComponent implements OnInit {
  isWavformExist: boolean = false;
  waveSurfer: any;
  isPlayAudio = false;
  rowSelection: string = "single";
  audioFileName: string;
  showPlayer: any = true;
  text: string;
  waveformData: ChannelData[];
  channelName: string;
  gridChannelName: string;
  waveFormGridOptions: GridOptions;
  gridDefined: boolean = false;
  da: any;
  enableDownload:boolean = false;
  toastrTimeOut: number = 10000;
  startDate: any;
  endDate: any;
  audoInputData: AudioInputs = {
    channelName: null,
    startDate: null,
    endDate: null
  };
  @Input() metaDataChannelName: string[];
  constructor(private cdref: ChangeDetectorRef, private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit() {
    this.showPlayer = false;
    // this.waveFormGridOptions = <GridOptions>{
    //   onGridReady: () => {
    //     this.waveFormGridOptions.api.sizeColumnsToFit();
    //   },
    //   rowHeight: 35
    // };
    //this.getChannelData(this.metaDataChannelName[this.metaDataChannelName.length-1])
  }
  ngOnChanges() {
    //this.constructWaveSurfer("assets/sample.wav");
    if (!this.gridDefined) {
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
      this.waveSurfer.load(url);

      this.waveSurfer.on('ready', () => {
        this.waveSurfer.play();
      });
    }


  }
  waveformColumnDefs = [
    { headerName: '', checkboxSelection: true, width: 80 },
    { headerName: 'Channel Name', field: 'channelName', width: 200 },
    {
      headerName: 'Initialized time', field: 'initializedTime', width: 200, cellRenderer: (data) => {
        return data.value ? (new Date(data.value * 1000)).toLocaleDateString() + " " + new Date(data.value * 1000).toLocaleTimeString() : '';
      }
    },
    {
      headerName: "Start time", field: "startTime", width: 200, cellRenderer: (data) => {
        return data.value ? (new Date(data.value * 1000)).toLocaleDateString() + " " + new Date(data.value * 1000).toLocaleTimeString() : '';
      }
    },
    {
      headerName: "End time", field: "endTime", width: 200, cellRenderer: (data) => {
        return data.value ? (new Date(data.value * 1000)).toLocaleDateString() + " " + new Date(data.value * 1000).toLocaleTimeString() : '';
      }
    }

  ];
  getChannelData(channelName) {
    this.gridChannelName = channelName;
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
  onSelectionChanged() {
    var selectedRows = this.waveFormGridOptions.api.getSelectedRows();
    if (selectedRows[0].startTime != null) {
      this.startDate = (new Date(selectedRows[0].startTime * 1000));
    }
    if (selectedRows[0].endTime != null) {
      this.endDate = (new Date(selectedRows[0].endTime * 1000));
    }

  }
  loadAudioUrl() {
    this.audoInputData.endDate = new Date(this.endDate).getTime();
    this.audoInputData.startDate = new Date(this.startDate).getTime();
    this.audoInputData.channelName = this.gridChannelName;
    this.dataService.getUrlByChannelName(this.audoInputData)
      .subscribe(
        response => {
          this.constructWaveSurfer(response);
          this.audioFileName = this.getAudioFileName(response);
          this.enableDownload = true;
          console.log(response);
        },
        error => {
          if (error.status != 200) {
            this.toastr.error('No audio found', '', {
              timeOut: this.toastrTimeOut
            });
            this.enableDownload = false;
          }
          if (error.status === 200) {
            this.constructWaveSurfer(error.error.text);
            this.audioFileName = this.getAudioFileName(error.error.text);
            this.enableDownload = true;
          }
          console.log(error);
        }
      );
  }
  getAudioFileName(audioUrl) {
    var arrVars = audioUrl.split("/");
    return arrVars.pop();

  }
  downloadAudio() {
    this.dataService.downloadAudio(this.audioFileName);
  }


}
