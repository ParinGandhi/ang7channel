import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-history',
  template: `<button class="btn btn-default btn-sm" style="margin-bottom: 6px;" (click)="onClick($event)"> History</button>`,
  //template: `<button type="button" (click)="onClick($event)">{{label}}</button>`,
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements ICellRendererAngularComp {

  constructor() { }

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
