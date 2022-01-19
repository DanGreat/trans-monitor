import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  highcharts = Highcharts;
  chartOptions = {};

  searchTerm = '';
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  currentRate = 8;
  todos = [];
  allTodos = [];

  today = Date.now()

  constructor(private _requestService: RequestService) { }

  ngOnInit(): void {
    this._requestService.getTodos().subscribe((result: any) => {
      this.collectionSize = result.length;
      this.todos = result;
      this.allTodos = this.todos;
    });

    this.chartOptions = {
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
      series: [{
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 24.4, 19.3, 16.0, 18.4, 17.9],
        type: ''
      }]
    }
  }


  search() {
    console.log('All Todos: ', this.allTodos);
    
    if(this.searchTerm) {
      const value = this.searchTerm;
      this.todos = this.allTodos.filter((val: any) => val['title'].toLowerCase().includes(value));
      this.collectionSize = this.todos.length;
    }
    
  }

}
