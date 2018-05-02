import { Component, OnInit, Input, OnDestroy, ViewChild, Output, EventEmitter,  AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { TableService } from '../app.service';
 import { TableViewComponent} from '../table-view/table-view.component';
@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css'],
  providers: [TableService, TableViewComponent],
})
export class TableDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  private req: any;
  q: any;
  table: any ;
  id: any;
  constructor(private route: ActivatedRoute, private http: Http, private _table: TableService) { }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.id = (+params['id']);
      console.log(this.id);
      this.req = this._table.get(this.id).subscribe(data => {
        this.table = data;
      });
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();

  }
}
