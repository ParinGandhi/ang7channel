import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
@Component({
  selector: 'app-play',
  template: `<button class="btn btn-primary" style="margin-bottom: 0.1%;" (click)="onClick($event,true)"> Play</button> &nbsp; <button class="btn btn-primary" style="margin-bottom: 0.1%;" (click)="onClick($event,false)"> <i class="fa fa-download"></i> Download</button>`,
 
})
export class PlayComponent implements ICellRendererAngularComp {

  constructor() { }

  public params: any;
  public label: string;

  agInit(params: any): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  onClick($event,isPlay) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        isPlay:isPlay
        // ...something
      }
      this.params.onClick(params);

    }
  }

  refresh(params?: any): boolean {
    return true;
  }
}
