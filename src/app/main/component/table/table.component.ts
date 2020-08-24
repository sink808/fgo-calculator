import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColModel } from './table.const';
import { AtkColModels } from '../../attack/attack.const';
import { TakaraguColModels } from '../../takaragu/takaragu.const';
import { animate, state, style, transition, trigger } from '@angular/animations';
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
  @Input() public data: AtkColModels[] | TakaraguColModels[]  = [];
  @Input() public colModels: ColModel[] = [];
  @Input() public displayedColumns: string[] = [];
  public dataSource = new MatTableDataSource<any>();
  public expandedElement: AtkColModels | TakaraguColModels;
  public expandColumns: string[] = [];
  constructor() {}

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.pushDataToTable();
    }
    if (changes.colModels && changes.displayedColumns) {
      this.loadExpandColumns();
    }
  }

  private loadExpandColumns(): void {
    this.expandColumns = this.colModels
      .map((col) => col.key)
      .filter((col) => this.displayedColumns.indexOf(col) === -1); // except displayedColumns
  }

  private pushDataToTable(): void {
    this.dataSource.data = this.data;
    if (this.data.length === 1) {
      this.scrollToBottom(); // cause newest data always in the top of table, the first scroll to bottom
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      window.scroll({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 5); // 等畫面render
  }

}
