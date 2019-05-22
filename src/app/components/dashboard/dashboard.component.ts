import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SharedService } from '../../shared.service';
import { DashBoardData } from '../../models/dashboardData';
import { applicationAttributes } from '../../models/applicationAttributes';
import { ToastrService } from 'ngx-toastr';
import { GridOptions, GridCellDef } from 'ag-grid-community';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'

})
export class DashboardComponent implements OnInit {
  options: any;
  dummySites: any;
  data: any;
  lengthOfsites: number;
  eventsGridOptions: GridOptions;
  eventsRowData: any;
  
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
  constructor(private dataService: DataService, private sharedService: SharedService, private toastr: ToastrService,private router:Router) {
  }

  eventsColumnDefs = [
    // { headerCheckboxSelection: true, checkboxSelection: true, width: 30 },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Type', field: 'eventType' },
    { headerName: 'Event', field: 'eventResponse' },
    { headerName: 'Time', field: 'eventTime' }
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
    this.sharedService.sharedDataSource.subscribe(data => {
      this.getDashBoardData();
    });
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
          },
          hideDelay: 0
        },
       
        noData: 'No data available',
        showValues: true,

        duration: 500,
        xAxis: {
          axisLabel: 'CHANNELS'
        },
        discretebar: {
          dispatch: {
            elementClick:(e) => { 
              this.redirectToRecordings(e);
            }
          }
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
        this.lengthOfsites = this.dashboardData.siteNames.length;
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
        for (var i = 0; i < this.eventsRowData.length; i++) {
          this.eventsRowData[i].eventTime = this.calculateJulianDay(this.eventsRowData[i].lastModifiedTs);
        }
        setInterval(() => {
          this.getEventsData();
        }, 300000)
      }
    )
  }

  calculateJulianDay = function (lastModTime) {
    var myDate = lastModTime;
    var year = myDate.substring(0, 4);
    var month = myDate.substring(5, 7);
    var day = myDate.substring(8, 10);
    var hour = myDate.substring(11, 13);
    var minutes = myDate.substring(14, 16);
    var seconds = myDate.substring(17, 19);

    var currentYear = new Date().getFullYear();
    var dayOne = new Date(currentYear, 0, 1);

    var eventDate = new Date(year, month - 1, day);

    var timeDiff = Math.abs(eventDate.getTime() - dayOne.getTime());
    var dayDifference: any = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (dayDifference < 100) {
      if (dayDifference < 10) {
        dayDifference = "00" + dayDifference;
      } else {
        dayDifference = "0" + dayDifference;
      }
    }

    var finalOutput = dayDifference.toString() + ":" + year + ":" + hour + minutes + seconds;
    return finalOutput;
  }

  setDummyData() {
    for (var k = 0; k <= this.dummySites.length - 1; k++) {
      this.dashboardData.siteNames.push(this.dummySites[k]);
      this.dashboardData.siteCount.push("0");

    }
  }

  setRefreshInterval(refreshInterval) {
    if (this.dashboardInterval) {
      clearInterval(this.dashboardInterval);
    }
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

  redirectToRecordings(a){
  this.dataService.getSearchData('siteName='+a.data.label)
  .subscribe(rowData => {
    console.log('Table response: %o', rowData);
    this.sharedService.setSearchFlag(false);
    this.sharedService.changeDataSource(rowData);
    this.sharedService.setDashboardSearch(true);
    d3.selectAll('.nvtooltip').remove();
    this.router.navigateByUrl('/view');
    this.toastr.success('Successfully returned ' + rowData.length + ' rows', '', {
      timeOut: 10000
    });
  });
}

}
