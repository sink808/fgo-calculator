import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColModel } from './table.const';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TableComponent implements OnInit, OnChanges {
  @Input() public data: any[] = [];
  @Input() public colModels: ColModel[] = [];
  @Input() public displayedColumns: string[] = [];
  public dataSource = new MatTableDataSource<any>();
  public expandedElement: any;
  public expandColumns: string[] = [];
  constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.dataSource.data = this.data;
    }
    if (changes.colModels && changes.displayedColumns) {
      this.expandColumns = this.colModels
        .map((col) => col.key)
        .filter((col) => this.displayedColumns.indexOf(col) === -1); // except displayedColumns
      }
  }

}
