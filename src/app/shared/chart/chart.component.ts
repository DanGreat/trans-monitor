import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  highcharts = Highcharts;
  chartOptions = {};

  public lineChartLegend = false;
  public lineChartPlugins = [];

  constructor() { 
    
    this.chartOptions = {
      chart: {
        type: 'areaspline'
      },
      title: {
        text: ""
      },
      xAxis: {
        title: {
          text: 'Month'
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {
        title: {
          text: "Volume"
        }
      },
      plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
      },
      series: [{
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 24.4, 19.3, 16.0, 18.4, 17.9],
        type: ''
      }],
      responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            // Make the labels less space demanding on mobile
            // chartOptions: {
            //     xAxis: {
            //         labels: {
            //             formatter: function () {
            //                 return this.value.charAt(0);
            //             }
            //         }
            //     },
            //     yAxis: {
            //         labels: {
            //             align: 'left',
            //             x: 0,
            //             y: -2
            //         },
            //         title: {
            //             text: ''
            //         }
            //     }
            // }
        }]
      }
    }
  }

  ngOnInit(): void {
  }

}
