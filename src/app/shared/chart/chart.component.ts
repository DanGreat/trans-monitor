import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  legend = false;
  delayed: any;

  public lineChartData: ChartDataset[] = [
    { 
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 0.2)',
      ],
      borderWidth: 0
   },
  ];
  public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions  = {
    responsive: true,
    layout: {
      padding: 20
    }
  };

  public lineChartLegend = false;
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
