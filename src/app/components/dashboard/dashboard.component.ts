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
  intervalList: any = [
    {
      label: '1 minute',
      value: 1000
    }, {
      label: '2 minutes',
      value: 2000
    }, {
      label: '3 minutes',
      value: 3000
    }, {
      label: '4 minutes',
      value: 4000
    }, {
      label: '5 minutes',
      value: 5000
    }
  ];

  chartAppAttributesChartData: any;
  public activeInactiveChartLabels: string[] = ['Available', 'Unavailable'];
  public activityLabels: string[] = ['Active', 'Inactive'];
  constructor(private dataService: DataService, private sharedService: SharedService) {
  }


  ngOnInit() {
    this.sharedService.sharedLoginResource.subscribe(data => {
      this.isLoggedIn = data
      if (this.isLoggedIn) {
        this.getDashBoardData();
      }
    })
    if (!this.isLoggedIn) {
      setTimeout(() => {
        document.getElementById('login').click();
      }, 500)
    }

  }


  getDashBoardData = function () {
    this.optionsForTool  = {
      chart: {
          type: 'discreteBarChart',
          height: 750,
          margin : {
              top: 20,
              right: 20,
              bottom: 50,
              left: 55
          },
          x: function(d){return d.label;},
          y: function(d){return d.value;},
          tooltip:{
            x: function (d) {
              return d.siteNames + ' ' + '[' + d.siteCount + ']';
            },
            contentGenerator: function (key) {
              return tooltip(key);
            }
          },
          showValues: true,
          valueFormat: function(d){
            return d3.format('0f')(d);   
          },
          duration: 500,
          xAxis: {
              axisLabel: 'CHANNELS'
          },
          yAxis: {
              axisLabel: 'SITES',
              axisLabelDistance: -15,
              tickFormat:function(d){
                return d3.format('0f')(d);
            }
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
       maxCount= Math.max(...this.dashboardData.siteCount);
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
              key: "Cumulative Return",
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
        this.optionsForTool.chart["yDomain"]=([0,maxCount]);
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
    //  var getMax = function(){
    //   return ([0,maxCount]) ;
    //  }
    this.options = {
      chart: {
        type: 'pieChart',
        height: 300,
        x: function (d) {
          return d.siteNames + ' ' + '[' + d.siteCount + ']';
        },
        y: function (d) {
          return d.siteCount;
        },
        showLabels: true,
        duration: 500,
        tooltip: {
          enabled: false
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
    // this.optionsForTool = {
    //   chart: {
    //     type: 'pieChart',
    //     height: 700,
    //     x: function (d) {
    //       return d.siteNames + ' ' + '[' + d.siteCount + ']';
    //     },
    //     y: function (d) {
    //       return d.siteCount;
    //     },
    //     showLabels: true,
    //     duration: 500,
    //     tooltip: {
    //       x: function (d) {
    //         return d.siteNames + ' ' + '[' + d.siteCount + ']';
    //       },
    //       contentGenerator: function (key) {
    //         return tooltip(key);
    //       }
    //     },
    //     labelThreshold: 0.01,
    //     labelSunbeamLayout: true,
    //     legend: {
    //       margin: {
    //         top: 10,
    //         right: 35,
    //         bottom: 5,
    //         left: 0
    //       }
    //     }
    //   }
    // };
    
  //this.optionsForTool.chart.yDomain=([0,maxCount]);
  }


  setRefreshInterval(intervalData) {
    setInterval(function () {
      this.getDashboardData()
    }, intervalData.value)
  }


}
