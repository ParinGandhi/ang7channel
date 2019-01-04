import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import WaveSurfer from '../../../../node_modules/wavesurfer.js';
import Timeline from '../../../../node_modules/wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';

@Component({
  selector: 'app-waveform',
  templateUrl: './waveform.component.html',
  styleUrls: ['./waveform.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaveformComponent implements OnInit {
  isWavformExist: boolean = false;
  waveSurfer: any;
  isPlayAudio = false;
  showPlayer: boolean = false;

  @Input() metaDataUrl: string[];
  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {


  }
  ngOnChanges() {
    this.constructWaveSurfer(this.metaDataUrl);
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
}
