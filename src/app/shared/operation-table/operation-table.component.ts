import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-table',
  templateUrl: './operation-table.component.html',
  styleUrls: ['./operation-table.component.scss']
})
export class OperationTableComponent implements OnInit {

  dates:number[] = [1,2,3,4,5]

  constructor() { }

  ngOnInit(): void {
  }

}
