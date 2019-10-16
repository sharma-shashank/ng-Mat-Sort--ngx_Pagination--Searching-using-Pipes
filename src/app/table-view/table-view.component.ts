import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TableService } from '../app.service';
import { Router } from '@angular/router';
import { SearchPipe} from '../search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableDetailComponent } from '../table-detail/table-detail.component';
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
  providers: [TableService],
})
export class TableViewComponent implements OnInit{
  private req: any;
  tableList: Array<any> = [];
  sortedData: any;
  arr: Array<any> = [];
  p: number = 1;
  constructor(private http: Http, private _table: TableService, private router: Router) {  }
  ngOnInit() {
    this.req = this._table.list().subscribe(data => {
       this.tableList = data ;
      this.sortedData = this.tableList;
       this.arr.push(this.tableList);
  });
  }
  sortData(sort: MatSort) {
    const data = this.tableList.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'first_name': return compare(a.first_name, b.first_name, isAsc);
        case 'last_name': return compare(a.last_name, b.last_name, isAsc);
        case 'company_name': return compare(a.company_name, b.company_name, isAsc);
        case 'city': return compare(a.city, b.city, isAsc);
        case 'state': return compare(a.state, b.state, isAsc);
        case 'zip': return compare(+a.zip, +b.zip, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'web': return compare(a.web, b.web, isAsc);
        case 'age': return compare(+a.age, +b.age, isAsc);
        default: return 0;
      }
    });
  } 
  }
function compare(a: any, b: any, isAsc: any) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



  
