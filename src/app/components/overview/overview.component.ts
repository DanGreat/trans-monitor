import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

 

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

  }


  search() {

    if(this.searchTerm) {
      const value = this.searchTerm;
      this.todos = this.allTodos.filter((val: any) => val['title'].toLowerCase().includes(value));
      this.collectionSize = this.todos.length;
    }
    
  }

  filterCompleted(ev: any) {
    const value = ev.target.value

    if(value === 'true') {
      this.todos = this.allTodos.filter((val: any) => val['completed'] === true );
    } else if(value === 'false') {
      this.todos = this.allTodos.filter((val: any) => val['completed'] === false );
    } else {
      this.todos = this.allTodos;
    }
    
  }

}
