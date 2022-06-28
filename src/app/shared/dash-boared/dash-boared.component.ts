import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-boared',
  templateUrl: './dash-boared.component.html',
  styleUrls: ['./dash-boared.component.scss']
})
export class DashBoaredComponent implements OnInit {

  shot:string = "Graph" ;
  showStations:boolean = false;
  showBarchart:boolean = true;
  station:number[] = [1,2,3]

  constructor() { }

  activBtn(data){
    this.shot = data
  }

  stationBtn(){
    this.showStations = true
    this.showBarchart = false
  }

  barChart(){
    this.showBarchart = true
    this.showStations = false

  }

  ngOnInit(): void {
  }

}
