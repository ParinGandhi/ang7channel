import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: 'app-play-audio',
  template: `<a style="margin-bottom: 6px;" (click)="onClick($event)">{{params.node.data.channelName}}</a>`
  // templateUrl: './play-audio.component.html',

})
export class PlayAudioComponent implements ICellRendererAngularComp {

  public params: any;
  public label: string;

  agInit(params: any): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }

  refresh(params?: any): boolean {
    return true;
  }

}
