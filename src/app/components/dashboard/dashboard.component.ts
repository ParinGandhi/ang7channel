import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SharedService } from '../../shared.service';
import { DashBoardData } from '../../models/dashboardData';
import { applicationAttributes } from '../../models/applicationAttributes';
import { ToastrService } from 'ngx-toastr';
import { GridOptions, GridCellDef } from 'ag-grid-community';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'

})
export class DashboardComponent implements OnInit {
  options: any;
  dummySites: any;
  data: any;
  eventsGridOptions: GridOptions;
  eventsRowData: any;
  // = [
  //   {
  //     "id": 1,
  //     "name": "Manage Channel",
  //     "descriptionText": "Manage Channel",
  //     "eventType": "Create Channel",
  //     "eventPayLoad": "{\"id\":1,\"channelName\":\"239.1.5.1-DGS-5-GMS\",\"encodingFormat\":\"YBD\",\"lastModifiedTs\":1557690562650,\"lastModifiedUserId\":\"EASLoader\",\"mediaOriginatedIp\":\"239.1.5.2\",\"mediaOriginatedPort\":5002,\"stndRole\":{\"id\":1,\"descriptionTx\":\"GMS\",\"endTs\":null,\"lastModifiedTs\":1557690562481,\"lastModifiedUserId\":\"mass upload\",\"nm\":\"GMS\",\"startTs\":1557690562481},\"stndSite\":{\"id\":1,\"descriptionTx\":\"DGS-5\",\"endTs\":null,\"lastModifiedTs\":1557690562592,\"lastModifiedUserId\":\"mass upload\",\"nm\":\"DGS-5\",\"notificationThreshold\":10,\"startTs\":1557690562592},\"standardClassification\":{\"id\":1,\"descriptionTx\":\"FOUO\",\"endTs\":null,\"lastModifiedTs\":1557690562616,\"lastModifiedUserId\":\"mass upload\",\"nm\":\"FOUO\",\"notificationThreshold\":10,\"startTs\":1557690562616},\"activity\":[],\"enableIn\":\"TRUE\"}",
  //     "eventResponse": "Successfully created channel",
  //     "category": "Success",
  //     "initiator": "EASSYSTEM",
  //     "startTs": "2019-05-12T19:49:23.000+0000",
  //     "endTs": "2019-05-12T19:49:23.000+0000",
  //     "lastModifiedUserId": "EAS",
  //     "lastModifiedTs": "2019-05-12T19:49:23.000+0000"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Manage Channel",
  //     "descriptionText": "Manage Channel",
  //     "eventType": "Create Channel",
  //     "eventPayLoad": "\"239.1.5.1-DGS-5-GMS\"",
  //     "eventResponse": "Channel Started for listening",
  //     "category": "Success",
  //     "initiator": "EASSYSTEM",
  //     "startTs": "2019-05-12T19:49:24.000+0000",
  //     "endTs": "2019-05-12T19:49:24.000+0000",
  //     "lastModifiedUserId": "EAS",
  //     "lastModifiedTs": "2019-05-12T19:49:24.000+0000"
  //   }
  // ];
  rowSelection: string = "multiple";

  public appAttributes: applicationAttributes = {
    ApplicationVersion: null,
    OSVersion: null,
    ApplicationState: null,
    ApplicationName: null,
  }

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

  selectedInterval: any;
  refreshInterval: number;
  dashboardRefreshInverval: any;
  dashboardInterval: any;
  refreshIntervals: any[] = [
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
    }
  ];

  chartAppAttributesChartData: any;
  public activeInactiveChartLabels: string[] = ['Enabled', 'Disabled'];
  public activityLabels: string[] = ['Active', 'Inactive'];
  constructor(private dataService: DataService, private sharedService: SharedService, private toastr: ToastrService) {
  }

  eventsColumnDefs = [
    // { headerCheckboxSelection: true, checkboxSelection: true, width: 30 },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Type', field: 'eventType' },
    { headerName: 'Event', field: 'eventResponse' },
    { headerName: 'Time', field: 'lastModifiedTs', type: 'dateColumn' }
  ];

  ngOnInit() {
    this.sharedService.sharedLoginResource.subscribe(data => {
      this.isLoggedIn = data
      if (this.isLoggedIn) {
        this.getDashBoardData();
        this.setRefreshInterval({
          description: "5 minutes",
          value: 300000
        });
        this.dashboardRefreshInverval = this.refreshIntervals[1];
      }
    })
    if (!this.isLoggedIn) {
      setTimeout(() => {
        document.getElementById('login').click();
      }, 500)
    }

    this.getEventsData();

    this.dummySites = ["   ",
      "",
      " ",
      "   ",
      "    ",
      "      "]
  }


  getDashBoardData = function () {
    this.optionsForTool = {
      chart: {
        type: 'discreteBarChart',
        height: 750,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        tooltip: {
          x: function (d) {
            return d.siteNames + ' ' + '[' + d.siteCount + ']';
          },
          contentGenerator: function (key) {
            return tooltip(key);
          }
        },
        noData: 'No data available',
        showValues: true,

        duration: 500,
        xAxis: {
          axisLabel: 'CHANNELS'
        },

        groupSpacing: 0.3,
        yAxis: {
          axisLabel: 'SITES',
          axisLabelDistance: -6,
          tickFormat: function (d) {
            if ((d * 10) % 10 === 0) {
              return d3.format('0f')(d);
            }
            else {
              return '';
            }
          }
          //tickValues:([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200]),

        }
      }
    };

    let activeCount;
    let maxCount;
    this.dashboardData = {};
    this.chartData = [];
    this.appAttributesChartData = [];
    this.activeInactiveData = [];
    this.activityData = [];
    this.dataService.getDashboardData().subscribe(
      response => {
        this.lastRefreshed = new Date();
        this.dashboardData = response;
        activeCount = this.dashboardData.activeChannelsBySite;
        maxCount = Math.max(...this.dashboardData.siteCount);
        this.optionsForTool.chart['valueFormat'] = function (d) {
          return d3.format('0f')(d);
        }
        if (this.dashboardData.siteNames.length <= 5 && this.dashboardData.siteNames.length != 0) {
          this.optionsForTool.chart['valueFormat'] = function (d) {
            if (d != 0) {
              return d3.format('0f')(d);
            }
          }
          this.setDummyData();
        }
        for (let i = 0; i < this.dashboardData.siteNames.length; i++) {
          let obj = {
            label: this.dashboardData.siteNames[i],
            value: this.dashboardData.siteCount[i]
          }
          this.chartData.push(obj);
        }
        let appAttributes = {
          siteNames: this.dashboardData.applicationAttributes.ApplicationName,
          siteCount: 1
        }
        this.appAttributesChartData.push(appAttributes);
        this.chartAppAttributesChartData = this.appAttributesChartData;
        this.data = [
          {
            values: this.chartData
          }
        ];
        let availableData = {
          siteNames: this.activeInactiveChartLabels[0], //available
          siteCount: this.dashboardData.totalNumberofAvaiableChannels
        }
        let unAvailableData = {
          siteNames: this.activeInactiveChartLabels[1],//unavailable
          siteCount: this.dashboardData.totalNumberofChannels - this.dashboardData.totalNumberofAvaiableChannels
        }
        let activeData = {
          siteNames: this.activityLabels[0], //active
          siteCount: this.dashboardData.totalNumberofActiveChannels
        }
        let inActiveData = {
          siteNames: this.activityLabels[1],// inactive
          siteCount: this.dashboardData.totalNumberofChannels - this.dashboardData.totalNumberofActiveChannels
        }
        this.activeInactiveData.push(availableData);
        this.activeInactiveData.push(unAvailableData);
        this.activityData.push(activeData);
        this.activityData.push(inActiveData);
        this.chartActivityData = this.activityData;
        this.chartActiveInactiveData = this.activeInactiveData;
        this.optionsForTool.chart["yDomain"] = ([0, maxCount]);


      }
    )




    var tooltip = function (hoveredData) {
      var toolTipView = '<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" > Number of Active channels : 0  </button>'
      for (let appViewState of activeCount) {
        if (appViewState.siteName == hoveredData.data.label) {
          toolTipView = '<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" > Number of Active channels : ' + appViewState.count + ' </button>';
        }

      }
      return toolTipView;
    }
    this.options = {
      chart: {
        type: 'pieChart',
        height: 325,
        x: function (d) {
          return d.siteNames + ' ' + '[' + d.siteCount + ']';
        },
        y: function (d) {
          return d.siteCount;
        },
        showLabels: true,
        noData: 'No data available',
        duration: 500,
        tooltip: {
          enabled: false
        },
        labelThreshold: 0.01,
        labelSunbeamLayout: false

      }

    };
  }

  getEventsData = function () {
    this.dataService.getErrorAdvisoryData().subscribe(
      response => {
        this.eventsRowData = response;
        setInterval(() => {
          this.getEventsData();
        }, 300000)
      }
    )
  }



  setDummyData() {
    for (var k = 0; k <= this.dummySites.length - 1; k++) {
      this.dashboardData.siteNames.push(this.dummySites[k]);
      this.dashboardData.siteCount.push("0");

    }
  }

  setRefreshInterval(refreshInterval) {
    this.dashboardInterval = setInterval(() => {
      this.getDashBoardData();
    }, refreshInterval.value);
    if (refreshInterval.value !== 9999999) {
      this.toastr.success('Successfully set auto refresh to ' + refreshInterval.description, '', {
        timeOut: 10000
      });
    } else {
      this.toastr.success('Successfully cancelled auto refresh.', '', {
        timeOut: 10000
      });
    }
  }



}
