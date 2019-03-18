import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SharedService } from '../../shared.service';
import { DashBoardData } from '../../models/dashboardData';
import { applicationAttributes } from '../../models/applicationAttributes';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'

})
export class DashboardComponent implements OnInit {
  options: any;
  data: any;
  public appAttributes: applicationAttributes = {
    ApplicationVersion: null,
    OSVersion: null,
    ApplicationState: null,
    ApplicationName: null
  }
  // public dashboardData: DashBoardData = {
  //   totalNumberofChannels: null,
  //   applicationAttributes: this.appAttributes,
  //   totalNumberofAvaiableChannels:null,
  //   totalNumberofActiveChannels:null,
  //   configuredDataByCategory:null,
  //   avaiableDataByCategory:null,
  //   siteNames:null,
  //   siteCount:null,
  // };
  public dashboardData: any;
  chartData: any = [];

  activeInactiveData: any = [];
  activityData: any = [];
  lastRefreshed: any;
  chartActiveInactiveData: any = [];
  chartActivityData: any = [];
  appAttributesChartData: any = [];
  isLoggedIn: boolean = false;
  activeChannelsBySite: any = [];

  chartAppAttributesChartData: any;
  public activeInactiveChartLabels: string[] = ['Available', 'Unavailable'];
  public activityLabels: string[] = ['Active', 'Inactive'];
  constructor(private dataService: DataService, private sharedService: SharedService) {



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
    this.sharedService.sharedLoginResource.subscribe(data => this.isLoggedIn = data)
    if (this.isLoggedIn) {
      this.getDashBoardData();
    } else {
      this.getDashBoardData();
      setTimeout(() => {
        document.getElementById('login').click();
      }, 500)
    }

  }
  getDashBoardData = function () {
    let activeCount;
    this.dataService.getDashboardData().subscribe(
      response => {
        this.lastRefreshed = new Date();
        this.dashboardData = response;
        activeCount = this.dashboardData.activeChannelsBySite;
        for (let i = 0; i < this.dashboardData.siteNames.length; i++) {
          let obj = {
            siteNames: this.dashboardData.siteNames[i],
            siteCount: this.dashboardData.siteCount[i]
          }
          this.chartData.push(obj);
        }
        let appAttributes = {
          siteNames: this.dashboardData.applicationAttributes.ApplicationName,
          siteCount: 1
        }
        this.appAttributesChartData.push(appAttributes);
        this.chartAppAttributesChartData = this.appAttributesChartData;
        this.data = this.chartData;
        let obj1 = {
          siteNames: this.activeInactiveChartLabels[0],
          siteCount: this.dashboardData.totalNumberofAvaiableChannels
        }
        let obj2 = {
          siteNames: this.activeInactiveChartLabels[1],
          siteCount: this.dashboardData.totalNumberofChannels - this.dashboardData.totalNumberofAvaiableChannels
        }
        let obj3 = {
          siteNames: this.activityLabels[0],
          siteCount: this.dashboardData.totalNumberofActiveChannels
        }
        let obj4 = {
          siteNames: this.activityLabels[1],
          siteCount: this.dashboardData.totalNumberofChannels - this.dashboardData.totalNumberofActiveChannels
        }
        this.activeInactiveData.push(obj1);
        this.activeInactiveData.push(obj2);
        this.activityData.push(obj3);
        this.activityData.push(obj4);
        this.chartActivityData = this.activityData;
        this.chartActiveInactiveData = this.activeInactiveData;
      }
    )
    var tooltip = function (hoveredData) {
      var toolTipView = '<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" > Number of Active channels : 0 </button>'
      for (let appViewState of activeCount) {
        if (appViewState.siteName == hoveredData.data.siteNames) {
          toolTipView = '<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" > Number of Active channels : ' + appViewState.count + ' </button>';
        }

      }
      return toolTipView;
    }
    this.options = {
      chart: {
        type: 'pieChart',
        height: 600,
        x: function (d) {
          return d.siteNames + ' ' + '[' + d.siteCount + ']';
        },
        y: function (d) {
          return d.siteCount;
        },
        showLabels: true,
        duration: 500,
        tooltip: {
          enabled:false
        },
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 10,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };
    this.optionsForTool = {
      chart: {
        type: 'pieChart',
        height: 600,
        x: function (d) {
          return d.siteNames + ' ' + '[' + d.siteCount + ']';
        },
        y: function (d) {
          return d.siteCount;
        },
        showLabels: true,
        duration: 500,
        tooltip: {
          x: function (d) {
            return d.siteNames + ' ' + '[' + d.siteCount + ']';
          },
          contentGenerator: function (key) {
            return tooltip(key);
          }
        },
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 10,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };
  }

}
