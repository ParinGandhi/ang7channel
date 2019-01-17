import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
  
})
export class DashboardComponent implements OnInit {
  options: any;
  data: any;

  public dashboardData: any = {};
  chartData: any = [];
  activeInactiveData: any = [];
  chartActiveInactiveData: any = [];
  public activeInactiveChartLabels: string[] = ['Active', 'Inactive'];

  constructor(private dataService: DataService) {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function (d) {
          return d.siteNames +' '+'['+d.siteCount+']';
        },
        y: function (d) {
          return d.siteCount;
        },
        showLabels: true,
        duration: 500,
        tooltip:{
          enabled:false},
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };
    // this.data = [
    //   {
    //     key: "P60-1",
    //     y: 256
    //   },
    //   {
    //     key: "P60-2",
    //     y: 445
    //   },
    //   {
    //     key: "P40",
    //     y: 225
    //   },
    //   {
    //     key: "P73",
    //     y: 127
    //   },
    //   {
    //     key: "P71",
    //     y: 128
    //   }
    // ];
    // this.dashboardData.siteNames = [
    //   "DGS-5",
    //   "DGS-4",
    //   "DGS-2",
    //   "DGS-1",
    //   "DGS-IN",
    //   "DGS-KS",
    //   "DGS-MA",
    //   "DMS-MD",
    //   "DMS-UT",
    //   "DGS-AR",
    //   "DGS-NV"
    // ];
    // this.dashboardData.siteCount = [
    //   "19",
    //   "19",
    //   "18",
    //   "18",
    //   "18",
    //   "18",
    //   "18",
    //   "18",
    //   "18",
    //   "18",
    //   "18"

    // ];
    // for (let i = 0; i < this.dashboardData.siteNames.length; i++) {
    //   let obj = {
    //     siteNames: this.dashboardData.siteNames[i],
    //     siteCount: this.dashboardData.siteCount[i]
    //   }
    //   this.chartData.push(obj);
    // }
    // this.data = this.chartData;
  }


  ngOnInit() {
    this.dataService.getDashboardData().subscribe(
      response => {
        this.dashboardData = response;
        for (let i = 0; i < this.dashboardData.siteNames.length; i++) {
          let obj = {
            siteNames: this.dashboardData.siteNames[i],
            siteCount: this.dashboardData.siteCount[i]
          }
          this.chartData.push(obj);
        }
        this.data = this.chartData;
        let obj1 = {
          siteNames: this.activeInactiveChartLabels[0],
          siteCount: this.dashboardData.totalNumberofAvaiableChannels
        }
        let obj2 = {
          siteNames: this.activeInactiveChartLabels[1],
          siteCount: this.dashboardData.totalNumberofChannels - this.dashboardData.totalNumberofAvaiableChannels
        }
        this.activeInactiveData.push(obj1);
        this.activeInactiveData.push(obj2);

        this.chartActiveInactiveData = this.activeInactiveData;

      }
    )


  }

}
